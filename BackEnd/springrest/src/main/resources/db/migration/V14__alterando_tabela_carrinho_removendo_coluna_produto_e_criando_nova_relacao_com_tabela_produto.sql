ALTER TABLE carrinho DROP FOREIGN KEY fk_carrinho_produto;
ALTER TABLE carrinho DROP COLUMN cod_prod;
ALTER TABLE carrinho DROP COLUMN quantidade;
ALTER TABLE carrinho CHANGE COLUMN valorTotal valor_total DECIMAL(10,2);

CREATE TABLE produto_carrinho (
	codigo BIGINT(20) AUTO_INCREMENT PRIMARY KEY,
	cod_carrinho BIGINT(20),
	cod_produto BIGINT(20),
	quantidade INTEGER,
	valor_total DECIMAL(10,2),
	CONSTRAINT fk_carrinho FOREIGN KEY(cod_carrinho) REFERENCES carrinho(codigo),
	CONSTRAINT fk_produto FOREIGN KEY(cod_produto) REFERENCES produto(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE carrinho ADD cod_prod_car BIGINT(20);
ALTER TABLE carrinho ADD CONSTRAINT fk_produto_carrinho FOREIGN KEY(cod_prod_car) REFERENCES produto_carrinho(codigo);


