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
import com.fadep.springrest.springrest.model.Marca;
import com.fadep.springrest.springrest.repository.MarcaRepository;
import com.fadep.springrest.springrest.service.MarcaService;

@RestController
@RequestMapping("/marcas")
public class MarcaResource {

	@Autowired
	private MarcaRepository marcaRepository;
	
	@Autowired
	private MarcaService marcaService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Marca> listar(){
		return marcaRepository.findAll();
	}
	
	@GetMapping("/ok")
	public String ok() {
		return "OK";
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Marca> buscarPorId(@PathVariable Long codigo) {
		Marca marcaRetornada = marcaRepository.findOne(codigo);
		return (marcaRetornada != null)?(ResponseEntity.ok(marcaRetornada)):(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Marca> criar(@Valid @RequestBody Marca marca, HttpServletResponse response) {
		Marca marcaSalva = marcaRepository.save(marca);
		publisher.publishEvent(new RecursoCriadoListener(this, response, marcaSalva.getCodigo()));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(marcaSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		marcaRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Marca> atualizar(@PathVariable Long codigo, @Valid @RequestBody Marca marca) {
		Marca marcaSalva = marcaService.atualizar(codigo, marca);
		return ResponseEntity.ok(marcaSalva);
	}
	
}
