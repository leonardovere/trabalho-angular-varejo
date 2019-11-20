package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fadep.springrest.springrest.model.Nota;

public interface NotaRepository extends JpaRepository<Nota, Long> {
	
}
