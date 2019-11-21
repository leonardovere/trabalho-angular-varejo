package com.fadep.springrest.springrest.repository;

import java.math.BigDecimal;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.fadep.springrest.springrest.model.Carrinho;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

	@Modifying
	@Transactional
	@Query("UPDATE Carrinho c SET c.valorTotal = :valor_total WHERE c.codigo = :codigo_carrinho")
	public Integer alterarValorTotalDoCarrinho(@Param("valor_total") BigDecimal valor, @Param("codigo_carrinho") Long codigo);
	
}
