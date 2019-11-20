CREATE TABLE marca (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO marca (nome) VALUES ('Coca-Cola');
INSERT INTO marca (nome) VALUES ('Brahma');
INSERT INTO marca (nome) VALUES ('Pepsi');

