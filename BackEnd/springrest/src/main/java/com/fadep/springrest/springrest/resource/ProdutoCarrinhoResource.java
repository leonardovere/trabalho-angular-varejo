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
import com.fadep.springrest.springrest.model.ProdutoCarrinho;
import com.fadep.springrest.springrest.repository.ProdutoCarrinhoRepository;
import com.fadep.springrest.springrest.service.ProdutoCarrinhoService;

@RestController
@RequestMapping("/produtosCarrinho")
public class ProdutoCarrinhoResource {

	@Autowired
	public ProdutoCarrinhoRepository produtoCarrinhoRepository;
	
	@Autowired 
	public ProdutoCarrinhoService produtoCarrinhoService;
	
	@Autowired
	public ApplicationEventPublisher publisher;
	
	@PostMapping
	public ResponseEntity<ProdutoCarrinho> criar(@Valid @RequestBody ProdutoCarrinho produtoCarrinho, HttpServletResponse response) {
		ProdutoCarrinho produtoCarrinhoSalvo = produtoCarrinhoRepository.save(produtoCarrinho);
		publisher.publishEvent(new RecursoCriadoListener(this, response, produtoCarrinhoSalvo.getCodigo()));
		return (produtoCarrinhoSalvo == null)
				?(ResponseEntity.badRequest().build())
				:(ResponseEntity.status(HttpStatus.CREATED).body(produtoCarrinhoSalvo));
	}
	
	@GetMapping
	public List<ProdutoCarrinho> listarTodos() {
		return produtoCarrinhoRepository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<ProdutoCarrinho> buscarPorCodigo(@PathVariable Long codigo) {
		ProdutoCarrinho produtoCarrinhoEncontrado = produtoCarrinhoService.buscarPorCodigo(codigo);
		return (produtoCarrinhoEncontrado == null)?(ResponseEntity.notFound().build()):(ResponseEntity.ok(produtoCarrinhoEncontrado));
	}
	
	@GetMapping("/buscarProdutosPorCarrinho/{codigo}")
	public List<ProdutoCarrinho> listarProdutosDoCarrinho(@PathVariable Long codigo) {
		return produtoCarrinhoRepository.produtosDoCarrinho(codigo);
	}
	
	@DeleteMapping("/{codigo}")
	public ResponseEntity<ProdutoCarrinho> remover(@PathVariable Long codigo) {
		ProdutoCarrinho produtoCarrinhoSalvo = produtoCarrinhoService.buscarPorCodigo(codigo);
		if (produtoCarrinhoSalvo == null) {
			return ResponseEntity.notFound().build();
		} else {
			produtoCarrinhoRepository.delete(codigo);
			return ResponseEntity.noContent().build();
		}
	}
	
	@PutMapping("/{codigo}")
	public ResponseEntity<ProdutoCarrinho> atualizar(@PathVariable Long codigo, @Valid @RequestBody ProdutoCarrinho produtoCarrinho) {
		ProdutoCarrinho produtoCarrinhoSalvo = produtoCarrinhoService.atualizar(codigo, produtoCarrinho);
		return ResponseEntity.ok(produtoCarrinhoSalvo);
	}
}
