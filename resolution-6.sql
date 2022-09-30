-- Queries SQL
-- Considerando um banco de dados mysql ou pgsql, 
-- imagine haver uma tabela produto (id, nome, valor) e outra tabela vendas 
-- (id, data, produto_id, qtde). 
-- Monte uma query em SQL que retorne as 
-- vendas mensais de cada produto (mes, produto, qtde, valor total).

select data, produto.nome, sum(qtde) as "quantity", sum(valor) as "total" from vendas
left join produto
on produto.id = vendas.produto_id
group by produto.nome, data
order by produto.nome, data;