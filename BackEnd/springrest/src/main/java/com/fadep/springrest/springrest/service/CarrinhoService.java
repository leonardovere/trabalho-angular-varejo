package com.fadep.springrest.springrest.service;

import java.math.BigDecimal;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Carrinho;
import com.fadep.springrest.springrest.model.ProdutoCarrinho;
import com.fadep.springrest.springrest.repository.CarrinhoRepository;
import com.fadep.springrest.springrest.repository.ProdutoCarrinhoRepository;

@Service
public class CarrinhoService {

	@Autowired
	public CarrinhoRepository carrinhoRepository;
	
	@Autowired
	public ProdutoCarrinhoRepository produtoCarrinhoRepository;
	
	public Carrinho atualizar(Long codigo, Carrinho carrinho) {
		Carrinho carrinhoSalvo = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(carrinho, carrinhoSalvo, "codigo");
		return carrinhoRepository.save(carrinhoSalvo);
	}
	
	public Carrinho buscarPorCodigo(Long codigo) {
		Carrinho carrinhoSalvo = carrinhoRepository.findOne(codigo);
		return (carrinhoSalvo == null)?(null):(carrinhoSalvo);
	}
	
	public ResponseEntity<Carrinho> remover(Long codigo) {
		Carrinho carrinhoSalvo = buscarPorCodigo(codigo);
		if (carrinhoSalvo == null) {
			return ResponseEntity.notFound().build();
		} else {
			ProdutoCarrinho produtoCarrinho = produtoCarrinhoRepository.buscarPorCodigoCarrinho(codigo);
			if(produtoCarrinho != null) {
				produtoCarrinhoRepository.delete(produtoCarrinho.getCodigo());
				carrinhoRepository.delete(codigo);
				return ResponseEntity.noContent().build();
			} else {
				return ResponseEntity.badRequest().build();
			}
			
		}
	}
	
	public ResponseEntity<Carrinho> alterarValorTotal(BigDecimal valorTotal, Long codigo) {
		Carrinho carrinhoSalvo = buscarPorCodigo(codigo);
		if (carrinhoSalvo == null) {
			return ResponseEntity.notFound().build();
		} else {
			Integer linhasAlteradas = carrinhoRepository.alterarValorTotalDoCarrinho(valorTotal, codigo);
			if (linhasAlteradas > 0) {
				carrinhoSalvo = buscarPorCodigo(codigo);
				return ResponseEntity.ok(carrinhoSalvo);
			} else {
				return ResponseEntity.badRequest().build();
			}
		}
	}
}
