-- Criar a tabela de exemplo
CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    data_compra DATE,
    quantidade INT
);

-- Inserir alguns dados fictícios
INSERT INTO vendas (data_compra, quantidade) VALUES
    ('2023-12-26', 10),
    ('2023-12-26', 5),
    ('2023-12-27', 8),
    ('2023-12-27', 12),
    ('2023-12-27', 6),
    ('2023-12-28', 15);

-- Criar a stored procedure
CREATE OR REPLACE FUNCTION LevantamentoDiario()
RETURNS TABLE (Dia DATE, QuantidadeTotal INT)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        data_compra::DATE AS Dia,
        SUM(quantidade) AS QuantidadeTotal
    FROM 
        vendas
    GROUP BY 
        data_compra::DATE;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM LevantamentoDiario();
-- Posso usar os dois tipos para invocar 
CALL LevantamentoDiario();
