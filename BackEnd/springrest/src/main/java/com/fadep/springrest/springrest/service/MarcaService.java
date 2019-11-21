package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Marca;
import com.fadep.springrest.springrest.repository.MarcaRepository;

@Service
public class MarcaService {
	
	@Autowired
	private MarcaRepository marcaRepository;

	public Marca atualizar(Long codigo, Marca marca) {
		Marca marcaSalva = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(marca, marcaSalva, "codigo");
		return marcaRepository.save(marcaSalva);
	}
	
	private Marca buscarPorCodigo(Long codigo) {
		Marca marcaSalva = marcaRepository.findOne(codigo);
		return marcaSalva;
	}
}
