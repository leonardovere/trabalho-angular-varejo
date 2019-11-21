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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fadep.springrest.springrest.event.RecursoCriadoListener;
import com.fadep.springrest.springrest.model.Compra;
import com.fadep.springrest.springrest.repository.CompraRepository;
import com.fadep.springrest.springrest.service.CompraService;

@RestController
@RequestMapping("/compras")
public class CompraResource {

	@Autowired
	private CompraRepository compraRepository;
	
	@Autowired
	private CompraService compraService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Compra> listar(){
		return compraRepository.findAll();
	}
	
	@GetMapping("/ok")
	public String ok() {
		return "OK";
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Compra> buscarPorId(@PathVariable Long codigo) {
		Compra compraRetornada = compraRepository.findOne(codigo);
		return (compraRetornada != null)?(ResponseEntity.ok(compraRetornada)):(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Compra> criar(@Valid @RequestBody Compra compra, HttpServletResponse response) {
		Compra compraSalva = compraRepository.save(compra);
		publisher.publishEvent(new RecursoCriadoListener(this, response, compraSalva.getCodigo()));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(compraSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		compraRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Compra> atualizar(@PathVariable Long codigo, @Valid @RequestBody Compra compra) {
		Compra compraSalva = compraService.atualizar(codigo, compra);
		return ResponseEntity.ok(compraSalva);
	}
	
}
