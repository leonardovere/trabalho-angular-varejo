package com.fadep.springrest.springrest.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fadep.springrest.springrest.event.RecursoCriadoListener;
import com.fadep.springrest.springrest.model.PagamentoCompra;
import com.fadep.springrest.springrest.repository.PagamentoCompraRepository;
import com.fadep.springrest.springrest.service.PagamentoCompraService;

@RestController
@RequestMapping("/pagamentoCompra")
public class PagamentoCompraResource {

	
	
	@Autowired
	public PagamentoCompraRepository pagamentoCompraRepository;
	
	@Autowired 
	public PagamentoCompraService pagamentoCompraService;
	
	@Autowired
	public ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<PagamentoCompra> criar(@Valid @RequestBody PagamentoCompra pagamentoCompra, HttpServletResponse response) {
		PagamentoCompra pagamentoCompraSalvo = pagamentoCompraRepository.save(pagamentoCompra);
		publisher.publishEvent(new RecursoCriadoListener(this, response, pagamentoCompraSalvo.getCodigo()));
		return (pagamentoCompraSalvo == null)?(ResponseEntity.badRequest().build()):(ResponseEntity.status(HttpStatus.CREATED).body(pagamentoCompraSalvo));
	}
	
	@GetMapping
	public List<PagamentoCompra> listarTodos() {
		return pagamentoCompraRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<PagamentoCompra> buscarPorCodigo(@PathVariable Long codigo) {
		PagamentoCompra pagamentoCompraEncontrado = pagamentoCompraService.buscarPorCodigo(codigo);
		return (pagamentoCompraEncontrado == null)?(ResponseEntity.notFound().build()):(ResponseEntity.ok(pagamentoCompraEncontrado));
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<PagamentoCompra> remover(@PathVariable Long codigo) {
		ResponseEntity<PagamentoCompra> response = pagamentoCompraService.remover(codigo);
		return response;
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<PagamentoCompra> atualizar(@PathVariable Long codigo, @Valid @RequestBody PagamentoCompra pagamentoCompra) {
		PagamentoCompra pagamentoCompraSalvo = pagamentoCompraService.atualizar(codigo, pagamentoCompra);
		return ResponseEntity.ok(pagamentoCompraSalvo);
	}
	
	
}
