package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fadep.springrest.springrest.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
