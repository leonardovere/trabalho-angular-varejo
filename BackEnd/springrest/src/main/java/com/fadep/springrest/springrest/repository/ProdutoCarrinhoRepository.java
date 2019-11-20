package com.fadep.springrest.springrest.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fadep.springrest.springrest.model.ProdutoCarrinho;

public interface ProdutoCarrinhoRepository extends JpaRepository<ProdutoCarrinho, Long>{

	@Query("SELECT pc FROM ProdutoCarrinho pc WHERE pc.carrinho.codigo = ?1")
	public ProdutoCarrinho buscarPorCodigoCarrinho(Long codigo);
	
	@Query("SELECT pc FROM ProdutoCarrinho pc WHERE pc.carrinho.codigo = ?1 AND pc.produto IS NOT NULL")
	public ArrayList<ProdutoCarrinho> produtosDoCarrinho(Long codigo);
	
}
