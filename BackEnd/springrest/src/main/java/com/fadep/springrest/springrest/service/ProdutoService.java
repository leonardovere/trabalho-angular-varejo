package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Produto;
import com.fadep.springrest.springrest.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	public ProdutoRepository produtoRepository;
	
	public Produto atualizar(Long codigo, Produto produto) {
		Produto produtoSalvo = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(produto, produtoSalvo, "codigo");
		return produtoRepository.save(produtoSalvo);
	}
	
	public Produto buscarPorCodigo(Long codigo) {
		Produto produtoSalvo = produtoRepository.findOne(codigo);
		return (produtoSalvo == null)?(null):(produtoSalvo);
	}

	
}
