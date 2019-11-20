package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fadep.springrest.springrest.model.Marca;

public interface MarcaRepository extends JpaRepository<Marca, Long> {
	
}
