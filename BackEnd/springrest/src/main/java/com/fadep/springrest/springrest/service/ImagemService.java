package com.fadep.springrest.springrest.service;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fadep.springrest.springrest.model.Imagem;
import com.fadep.springrest.springrest.repository.ImagemRepository;
@Service
public class ImagemService {
	
	@Autowired
	private ImagemRepository imagemRepository;

	public Imagem atualizar(Long codigo, Imagem imagem) {
		Imagem imagemSalva = buscarPorCodigo(codigo);
		BeanUtils.copyProperties(imagem, imagemSalva, "codigo");
		return imagemRepository.save(imagemSalva);
	}
	
	private Imagem buscarPorCodigo(Long codigo) {
		Imagem imagemSalva = imagemRepository.findOne(codigo);
		return imagemSalva;
	}

}
