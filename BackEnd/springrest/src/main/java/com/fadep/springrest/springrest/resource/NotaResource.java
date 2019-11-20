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
import com.fadep.springrest.springrest.model.Nota;
import com.fadep.springrest.springrest.repository.NotaRepository;
import com.fadep.springrest.springrest.service.NotaService;

@RestController
@RequestMapping("/notas")
public class NotaResource {

	@Autowired
	private NotaRepository notaRepository;
	
	@Autowired
	private NotaService notaService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	public List<Nota> listar(){
		return notaRepository.findAll();
	}
	
	@GetMapping("/ok")
	public String ok() {
		return "OK";
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Nota> buscarPorId(@PathVariable Long codigo) {
		Nota notaRetornada = notaRepository.findOne(codigo);
		return (notaRetornada != null)?(ResponseEntity.ok(notaRetornada)):(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Nota> criar(@Valid @RequestBody Nota nota, HttpServletResponse response) {
		Nota notaSalva = notaRepository.save(nota);
		publisher.publishEvent(new RecursoCriadoListener(this, response, notaSalva.getCodigo()));
		
		return ResponseEntity.status(HttpStatus.CREATED).body(notaSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		notaRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Nota> atualizar(@PathVariable Long codigo, @Valid @RequestBody Nota nota) {
		Nota notaSalva = notaService.atualizar(codigo, nota);
		return ResponseEntity.ok(notaSalva);
	}
	
}
