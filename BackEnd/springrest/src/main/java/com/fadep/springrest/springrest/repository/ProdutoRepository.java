package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fadep.springrest.springrest.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	@Query("SELECT SUM(pc.quantidade) FROM ProdutoCarrinho pc WHERE pc.carrinho.codigo = ?1")
	public Integer quantiadeDeProdutosNoCarrinho(Long codigo);
}
