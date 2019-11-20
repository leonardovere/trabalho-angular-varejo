CREATE TABLE NOTA(
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	COD_PESSOA BIGINT,
	COD_COMPRA BIGINT,
	DT_NOTA TIMESTAMP,
	NUMDOC INT
	
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE NOTA ADD CONSTRAINT FK_NOTA_PESSOA FOREIGN KEY(COD_PESSOA) REFERENCES PESSOA(CODIGO);
ALTER TABLE NOTA ADD CONSTRAINT FK_NOTA_COMPRA FOREIGN KEY(COD_COMPRA) REFERENCES COMPRA(CODIGO);