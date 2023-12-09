CREATE TABLE
    aluno (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        endereco VARCHAR(255) NOT NULL
    );

ALTER TABLE aluno ADD COLUMN matricula INTEGER NOT NULL;

ALTER TABLE aluno ADD COLUMN telefone VARCHAR(20) NOT NULL;

INSERT INTO
    aluno (
        nome,
        email,
        endereco,
        matricula,
        telefone
    )
VALUES (
        'Joao Carlos',
        'Jcarlos@gmail.com',
        'Rua 13 de maio',
        1234,
        '(11)7825-4489'
    ), (
        'José Vitor',
        'Jvitorf@gmail.com',
        'Rua da Saudade',
        2345,
        '(11)7825-4489'
    ), (
        'Paulo André',
        'Pandr@gmail.com',
        'Rua do sol',
        3456,
        '(11)7825-4489'
    );

SELECT * from aluno;

CREATE TABLE
    emprestimo (
        codigo SERIAL PRIMARY KEY,
        data_hora TIMESTAMP,
        matric_Aluno INTEGER Not NULL,
        data_devolucao DATE
    );

Insert INTO
    emprestimo (
        data_hora,
        matric_Aluno,
        data_devolucao
    )
VALUEs (
        '2023-12-09 15:25:00',
        1232,
        '2024/01/12'
    ), (
        '2023-12-09 19:25:00',
        2345,
        '2024/05/12'
    ), (
        '2023-12-09 11:59:00',
        2352,
        '2024/01/02'
    );

CREATE TABLE
    livro_emprestimo (
        cod_livro int Not NULL,
        cod_emprestimo int NOT NULL,
        PRIMARY KEY (cod_livro, cod_emprestimo)
    );

INSERT INTO
    livro_emprestimo (cod_livro, cod_emprestimo)
VALUES (03, 01), (01, 03), (02, 02);

SELECT * FROM livro_emprestimo;

CREATE TABLE
    livro(
        cod_livro SERIAL PRIMARY KEY,
        titulo CHAR(255) NOT NULL,
        autor CHAR(255) NOT NULL,
        cod_sessao INT NOT NULL
    );

INSERT INTO
    livro (titulo, autor, cod_sessao)
VALUES (
        'Modelo Conceitual e Diagramas ER',
        'PRESMAN, ROGER S.',
        3
    ), (
        'Livro 2: Modelo Relacional e Álgebra Relacional',
        'Heuser, Carlos Alberto',
        2
    ), (
        'Modelo Conceitual e Diagramas ER',
        'Beighle, Lynn.',
        1
    );

select * from livro;

CREATE TABLE
    sessao (
        codigo SERIAL PRIMARY KEY,
        descricao VARCHAR(255),
        localizacao VARCHAR(255)
    )
INSERT INTO
    sessao (descricao, localizacao)
VALUES ('Sessao1', 'Partilheira1'), ('Sessao2', 'Partilheira2'), ('Sessao3', 'Partilheira3');

SELECT * FROM sessao;