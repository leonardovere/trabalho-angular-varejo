package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.ProdutoCarrinho;
import com.fadep.springrest.springrest.repository.ProdutoCarrinhoRepository;

@Service
public class ProdutoCarrinhoService {

	@Autowired
	private ProdutoCarrinhoRepository produtoCarrinhoRepository;

	public ProdutoCarrinho atualizar(Long codigo, ProdutoCarrinho produtoCarrinho) {
		ProdutoCarrinho produtoCarrinhoSalvo = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(produtoCarrinho, produtoCarrinhoSalvo, "codigo");
		return produtoCarrinhoRepository.save(produtoCarrinhoSalvo);
	}

	public ProdutoCarrinho buscarPorCodigo(Long codigo) {
		ProdutoCarrinho produtoCarrinhoSalvo = produtoCarrinhoRepository.findOne(codigo);
		return produtoCarrinhoSalvo;
	}
}
