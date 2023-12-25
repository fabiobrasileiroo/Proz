[20:13] Jeice Annie dos Santos
SELECT

	COUNT (*) AS qtde_de_avaliacoes,

    TRUNC(AVG(rating)) AS media_das_avaliacoes,

    movie_id

FROM avaliacoes

GROUP by movie_id

ORDER by media_das_avaliacoes DESC;
[20:14] Jeice Annie dos Santos
-- Agrupamento de funções

-- COUNT, AVG, SUM, DISTINCT, MAX, MIN
 
-- Média de idade dos usuários femininos e masculinos

SELECT TRUNC(AVG(age)) AS media_idade_MASCULINO

FROM usuarios

WHERE gender = 'M';
 
SELECT TRUNC(AVG(age)) AS media_idade_FEMININO

FROM usuarios

WHERE gender = 'F';
 
-- GRUOP BY

SELECT TRUNC(AVG(age)) AS média_dos_generos, gender as generos

FROM usuarios

GROUP BY gender;
 
-- saber a quantidade de avaliações, a média dessas avaliações de cada filme

SELECT *

from avaliacoes;
 
SELECT

	COUNT (*) AS qtde_de_avaliacoes,

    TRUNC(AVG(rating)) AS media_das_avaliacoes,

    movie_id

FROM avaliacoes

GROUP by movie_id

ORDER by media_das_avaliacoes DESC;
 
 
SELECT

	COUNT (*) AS qtde_de_avaliacoes,

    TRUNC(AVG(rating)) AS media_das_avaliacoes,

    movie_id,

    MAX (filmes.title) AS titulo_filme

FROM avaliacoes

JOIN filmes on avaliacoes.movie_id = filmes.id

GROUP by movie_id

ORDER by media_das_avaliacoes DESC;
 
 
 
 
 
 
 
 
 