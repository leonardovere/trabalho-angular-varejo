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
import com.fadep.springrest.springrest.model.Pagamento;
import com.fadep.springrest.springrest.repository.PagamentoRepository;
import com.fadep.springrest.springrest.service.PagamentoService;

@RestController
@RequestMapping("/pagamento")
public class PagamentoResource {

	@Autowired
	private PagamentoRepository pagamentoRepository;
	
	@Autowired
	private PagamentoService pagamentoService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<Pagamento> criar(@Valid @RequestBody Pagamento pagamento, HttpServletResponse response){
		Pagamento pagamentoSalvo = pagamentoRepository.save(pagamento);
		publisher.publishEvent(new RecursoCriadoListener(this, response, pagamentoSalvo.getCodigo()));
		return ResponseEntity.status(HttpStatus.CREATED).body(pagamentoSalvo);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Pagamento> buscarPorId(@PathVariable Long codigo) {
		Pagamento pagamentoRetornado = pagamentoRepository.findOne(codigo);
		return (pagamentoRetornado != null)?(ResponseEntity.ok(pagamentoRetornado)):(ResponseEntity.notFound().build());
	}
	
	@GetMapping
	public List<Pagamento> listar(){
		return pagamentoRepository.findAll();
	}
	
	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		pagamentoRepository.delete(codigo);
	}
	
	@PutMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<Pagamento> atualizar(@PathVariable Long codigo, @Valid @RequestBody Pagamento pagamento) {
		Pagamento pagamentoSalvo = pagamentoService.atualizar(codigo, pagamento);
		return ResponseEntity.ok(pagamentoSalvo);
	}
}
