ALTER TABLE produto CHANGE COLUMN marca cod_marca BIGINT(20);
ALTER TABLE produto CHANGE COLUMN precocusto preco_custo DECIMAL(10,2);
ALTER TABLE produto CHANGE COLUMN quantidest quantidade_estoque BIGINT(20);
ALTER TABLE produto CHANGE COLUMN codigobarra codigo_barra BIGINT(20);