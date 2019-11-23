package com.fadep.springrest.springrest.model;

import java.math.BigDecimal;
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
@Table(name="compra")
public class Compra {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="codigo")
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name="compra_carrinho")
	private Carrinho compraCarrinho;
	
	@Column(name="desconto")
	private BigDecimal desconto;
	
	@Column(name="valorcomdesconto")
	private BigDecimal valorComDesconto;
	
	@Column(name="dt_compra")
	private Date dtCompra;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}	
	
	public Carrinho getCompraCarrinho() {
		return compraCarrinho;
	}

	public void setCompraCarrinho(Carrinho compraCarrinho) {
		this.compraCarrinho = compraCarrinho;
	}

	public BigDecimal getDesconto() {
		return desconto;
	}

	public void setDesconto(BigDecimal desconto) {
		this.desconto = desconto;
	}

	public BigDecimal getValorComDesconto() {
		return valorComDesconto;
	}

	public void setValorComDesconto(BigDecimal valorComDesconto) {
		this.valorComDesconto = valorComDesconto;
	}

	public Date getDtCompra() {
		return dtCompra;
	}

	public void setDtCompra(Date dtCompra) {
		this.dtCompra = dtCompra;
	}
	
//	public BigDecimal calculoValorComDesconto() {
//		BigDecimal valor = BigDecimal.valueOf(1.0);
//		valor = BigDecimal.valueOf(this.compraCarrinho.getValorTotal().doubleValue() - this.desconto.doubleValue());		
//		return valor;
//	}

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
		Compra other = (Compra) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
	
}
