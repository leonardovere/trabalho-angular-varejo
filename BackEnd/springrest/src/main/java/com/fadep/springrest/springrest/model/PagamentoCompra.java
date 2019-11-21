package com.fadep.springrest.springrest.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="pagamento_compra")
public class PagamentoCompra {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="codigo")
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name="cod_pagamento")
	private Pagamento pagamento;
	
	@ManyToOne
	@JoinColumn(name="cod_compra")
	private PagamentoCompra compra;
	
	@Column(name="numcartao")
	private Long numCartao;
	
	@Column(name="numboleto")
	private Long numBoleto;
	
	@Column(name="agencia")
	private Long agencia;
	
	@Column(name="vezes")
	private Long vezes;
	
	@Column(name="dt_emissao")
	private Date dt_emissao;
	
	@Column(name="dt_vencimento")
	private Date dt_vencimento;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	
	



	public Pagamento getPagamento() {
		return pagamento;
	}

	public void setPagamento(Pagamento pagamento) {
		this.pagamento = pagamento;
	}

	public PagamentoCompra getCompra() {
		return compra;
	}

	public void setCompra(PagamentoCompra compra) {
		this.compra = compra;
	}

	public Long getNumCartao() {
		return numCartao;
	}

	public void setNumCartao(Long numCartao) {
		this.numCartao = numCartao;
	}

	public Long getNumBoleto() {
		return numBoleto;
	}

	public void setNumBoleto(Long numBoleto) {
		this.numBoleto = numBoleto;
	}

	public Long getAgencia() {
		return agencia;
	}

	public void setAgencia(Long agencia) {
		this.agencia = agencia;
	}

	public Long getVezes() {
		return vezes;
	}

	public void setVezes(Long vezes) {
		this.vezes = vezes;
	}

	public Date getDt_emissao() {
		return dt_emissao;
	}

	public void setDt_emissao(Date dt_emissao) {
		this.dt_emissao = dt_emissao;
	}

	public Date getDt_vencimento() {
		return dt_vencimento;
	}

	public void setDt_vencimento(Date dt_vencimento) {
		this.dt_vencimento = dt_vencimento;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PagamentoCompra other = (PagamentoCompra) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
	
	
	


}
