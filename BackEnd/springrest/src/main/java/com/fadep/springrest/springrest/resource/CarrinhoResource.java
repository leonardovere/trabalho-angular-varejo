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
import com.fadep.springrest.springrest.model.Carrinho;
import com.fadep.springrest.springrest.repository.CarrinhoRepository;
import com.fadep.springrest.springrest.service.CarrinhoService;

@RestController
@RequestMapping("/carrinhos")
public class CarrinhoResource {

	@Autowired
	public CarrinhoRepository carrinhoRepository;
	
	@Autowired 
	public CarrinhoService carrinhoService;
	
	@Autowired
	public ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<Carrinho> criar(@Valid @RequestBody Carrinho carrinho, HttpServletResponse response) {
		Carrinho carrinhoSalvo = carrinhoRepository.save(carrinho);
		publisher.publishEvent(new RecursoCriadoListener(this, response, carrinhoSalvo.getCodigo()));
		return (carrinhoSalvo == null)?(ResponseEntity.badRequest().build()):(ResponseEntity.status(HttpStatus.CREATED).body(carrinhoSalvo));
	}
	
	@GetMapping
	public List<Carrinho> listarTodos() {
		return carrinhoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Carrinho> buscarPorCodigo(@PathVariable Long codigo) {
		Carrinho carrinhoEncontrado = carrinhoService.buscarPorCodigo(codigo);
		return (carrinhoEncontrado == null)?(ResponseEntity.notFound().build()):(ResponseEntity.ok(carrinhoEncontrado));
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<Carrinho> remover(@PathVariable Long codigo) {
		ResponseEntity<Carrinho> response = carrinhoService.remover(codigo);
		return response;
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Carrinho> atualizar(@PathVariable Long codigo, @Valid @RequestBody Carrinho carrinho) {
		Carrinho carrinhoSalvo = carrinhoService.atualizar(codigo, carrinho);
		return ResponseEntity.ok(carrinhoSalvo);
	}
	
	@PutMapping("alterarValorTotal/{codigo}")
	public ResponseEntity<Carrinho> alterarValorTotal(@PathVariable Long codigo, @RequestBody Carrinho carrinho) {
		ResponseEntity<Carrinho> response = carrinhoService.alterarValorTotal(carrinho.getValorTotal(), codigo);
		return response;
	}
}
