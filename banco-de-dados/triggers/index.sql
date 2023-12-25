-- Criar o banco de dados
CREATE DATABASE MeuBancoDeDados;

-- Conectar ao banco de dados
\c MeuBancoDeDados;

-- Criar tabela "Clientes"
CREATE TABLE Clientes (
    ClienteID SERIAL PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(50)
);

-- Criar tabela "Compras"
CREATE TABLE Compras (
    CompraID SERIAL PRIMARY KEY,
    ClienteID INT REFERENCES Clientes(ClienteID),
    Produto VARCHAR(50),
    Valor DECIMAL(10, 2)
);

-- Criar uma tabela de log para registrar alterações
CREATE TABLE LogCompras (
    LogID SERIAL PRIMARY KEY,
    Acao VARCHAR(10),
    DataAcao TIMESTAMP,
    CompraID INT
);

-- Criar uma função que será usada no trigger
CREATE OR REPLACE FUNCTION RegistrarLogCompra()
RETURNS TRIGGER AS $$
BEGIN
    -- Exemplo de ação do trigger: registrar alteração em uma tabela de log
    INSERT INTO LogCompras (Acao, DataAcao, CompraID)
    VALUES (
        CASE 
            WHEN TG_OP = 'INSERT' THEN 'INSERT'
            WHEN TG_OP = 'UPDATE' THEN 'UPDATE'
            WHEN TG_OP = 'DELETE' THEN 'DELETE'
        END,
        CURRENT_TIMESTAMP,
        COALESCE(NEW.CompraID, OLD.CompraID)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar o trigger que utiliza a função definida
CREATE TRIGGER LogAlteracaoCompra
AFTER INSERT OR UPDATE OR DELETE
ON Compras
FOR EACH ROW
EXECUTE FUNCTION RegistrarLogCompra();
