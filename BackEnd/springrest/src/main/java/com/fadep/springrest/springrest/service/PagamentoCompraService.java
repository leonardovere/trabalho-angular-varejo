package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.fadep.springrest.springrest.model.PagamentoCompra;

import com.fadep.springrest.springrest.repository.PagamentoCompraRepository;


@Service
public class PagamentoCompraService {
	
	
	@Autowired
	private PagamentoCompraRepository pagamentoCompraRepository;
	
	public PagamentoCompra atualizar(Long codigo, PagamentoCompra pagamentoCompra) {
		PagamentoCompra pagamentoCompraSalvo = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(pagamentoCompra, pagamentoCompraSalvo, "codigo");
		return pagamentoCompraRepository.save(pagamentoCompraSalvo);
	}
	
	public PagamentoCompra buscarPorCodigo(Long codigo) {
		PagamentoCompra pagamentoCompraSalvo = pagamentoCompraRepository.findOne(codigo);
		return pagamentoCompraSalvo;
	}
	
	public ResponseEntity<PagamentoCompra> remover(Long codigo) {
		PagamentoCompra pagamentoCompraSalvo = buscarPorCodigo(codigo);
		if (pagamentoCompraSalvo == null) {
			return ResponseEntity.notFound().build();
		} else {
			pagamentoCompraRepository.delete(pagamentoCompraSalvo);
			PagamentoCompra pagamentoCompra = buscarPorCodigo(codigo);
			if(pagamentoCompra == null) {
				return ResponseEntity.noContent().build();
			} else {
				return ResponseEntity.badRequest().build();
			}
			
		}
	}

}
