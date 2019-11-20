package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fadep.springrest.springrest.model.Compra;

public interface CompraRepository extends JpaRepository<Compra, Long> {
	
}
