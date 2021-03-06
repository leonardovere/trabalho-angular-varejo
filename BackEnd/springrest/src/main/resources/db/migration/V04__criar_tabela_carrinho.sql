CREATE TABLE carrinho(
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	cod_pessoa BIGINT,
	cod_prod BIGINT,
	sessao BIGINT,
	quantidade FLOAT,
	valorTotal FLOAT
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE CARRINHO ADD CONSTRAINT FK_CARRINHO_PESSOA FOREIGN KEY(COD_PESSOA) REFERENCES PESSOA(CODIGO);
ALTER TABLE CARRINHO ADD CONSTRAINT FK_CARRINHO_PRODUTO FOREIGN KEY(COD_PROD) REFERENCES PRODUTO(CODIGO);