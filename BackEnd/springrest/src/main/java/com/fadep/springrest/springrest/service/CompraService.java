package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Compra;
import com.fadep.springrest.springrest.repository.CompraRepository;

@Service
public class CompraService {
	
	@Autowired
	private CompraRepository compraRepository;

	public Compra atualizar(Long codigo, Compra compra) {
		Compra compraSalva = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(compra, compraSalva, "codigo");
		return compraRepository.save(compraSalva);
	}
	
	private Compra buscarPorCodigo(Long codigo) {
		Compra compraSalva = compraRepository.findOne(codigo);
		return compraSalva;
	}
}
