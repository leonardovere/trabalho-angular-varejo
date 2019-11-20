package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Pagamento;
import com.fadep.springrest.springrest.repository.PagamentoRepository;

@Service
public class PagamentoService {

	@Autowired
	private PagamentoRepository pagamentoRepository;
	
	public Pagamento atualizar(Long codigo, Pagamento pagamento) {
		Pagamento pagamentoSalvo = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(pagamento, pagamentoSalvo, "codigo");
		return pagamentoRepository.save(pagamentoSalvo);
	}
	
	private Pagamento buscarPorCodigo(Long codigo) {
		Pagamento pagamentoSalvo = pagamentoRepository.findOne(codigo);
		return pagamentoSalvo;
	}
}
