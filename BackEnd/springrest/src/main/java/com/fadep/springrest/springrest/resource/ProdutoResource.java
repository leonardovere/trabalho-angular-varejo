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
import com.fadep.springrest.springrest.model.Produto;
import com.fadep.springrest.springrest.repository.ProdutoRepository;
import com.fadep.springrest.springrest.service.ProdutoService;

@RequestMapping("/produtos")
@RestController
public class ProdutoResource {

	@Autowired
	public ProdutoRepository produtoRepository;
	
	@Autowired 
	public ProdutoService produtoService;
	
	@Autowired
	public ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<Produto> criar(@Valid @RequestBody Produto produto, HttpServletResponse response) {
		Produto produtoSalvo = produtoRepository.save(produto);
		publisher.publishEvent(new RecursoCriadoListener(this, response, produtoSalvo.getCodigo()));
		return (produtoSalvo == null)?(ResponseEntity.badRequest().build()):(ResponseEntity.status(HttpStatus.CREATED).body(produtoSalvo));
	}
	
	@GetMapping
	public List<Produto> listarTodos() {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Produto> buscarPorCodigo(@PathVariable Long codigo) {
		Produto produtoEncontrado = produtoService.buscarPorCodigo(codigo);
		return (produtoEncontrado == null)?(ResponseEntity.notFound().build()):(ResponseEntity.ok(produtoEncontrado));
	}
	
	@GetMapping("/quantidadeProdutos/{codigo}")
	public Integer retornarQuantidadeProdutos(@PathVariable Long codigo) {
		return produtoRepository.quantiadeDeProdutosNoCarrinho(codigo);
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<Produto> remover(@PathVariable Long codigo) {
		Produto produtoSalvo = produtoService.buscarPorCodigo(codigo);
		if (produtoSalvo == null) {
			return ResponseEntity.notFound().build();
		} else {
			produtoRepository.delete(codigo);
			return ResponseEntity.noContent().build();
		}
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<Produto> atualizar(@PathVariable Long codigo, @Valid @RequestBody Produto produto) {
		Produto produtoSalvo = produtoService.atualizar(codigo, produto);
		return ResponseEntity.ok(produtoSalvo);
	}
}
