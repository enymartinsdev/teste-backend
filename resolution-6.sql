-- Queries SQL
-- Considerando um banco de dados mysql ou pgsql, 
-- imagine haver uma tabela produto (id, nome, valor) e outra tabela vendas 
-- (id, data, produto_id, qtde). 
-- Monte uma query em SQL que retorne as 
-- vendas mensais de cada produto (mes, produto, qtde, valor total).

SELECT data, produto.nome, sum(qtde) as "quantity", sum(valor) as "total" from vendas
LEFT JOIN produto
on produto.id = vendas.produto_id
WHERE month(data) = 8
GROUP BY 2