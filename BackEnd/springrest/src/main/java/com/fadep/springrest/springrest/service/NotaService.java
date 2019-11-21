package com.fadep.springrest.springrest.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Nota;
import com.fadep.springrest.springrest.repository.NotaRepository;

@Service
public class NotaService {
	
	@Autowired
	private NotaRepository notaRepository;

	public Nota atualizar(Long codigo, Nota nota) {
		Nota notaSalva = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(nota, notaSalva, "codigo");
		return notaRepository.save(notaSalva);
	}
	
	private Nota buscarPorCodigo(Long codigo) {
		Nota notaSalva = notaRepository.findOne(codigo);
		return notaSalva;
	}
}
