package com.fadep.springrest.springrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fadep.springrest.springrest.model.Lancamento;

public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {

}
