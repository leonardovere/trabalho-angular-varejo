import { ProdutoCarrinhoService } from './services/produto-carrinho.service';
import { CarrinhoService } from './services/carrinho.service';
import { ProdutoService } from './services/produto.service';
import { PessoaService } from './services/pessoa.service';
import { DialogoMarcaComponent } from './marca-page/dialogo-marca/dialogo-marca.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MarcaPageComponent } from './marca-page/marca-page.component';
import { PessoaPageComponent } from './pessoa-page/pessoa-page.component';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import {
	MatSnackBarModule,
	MatDialogModule,
	MatInputModule
	} from '@angular/material';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';
import { NotificacaoService } from './services/notificacao.service';
import { MarcaService } from './services/marca.service';
import { DialogoPessoaComponent } from './pessoa-page/dialogo-pessoa/dialogo-pessoa.component';
import { ProdutoPageComponent } from './produto-page/produto-page.component';
import { DialogoProdutoComponent } from './produto-page/dialogo-produto/dialogo-produto.component';
import { DialogoAlterarProdutoComponent } from './produto-page/dialogo-alterar-produto/dialogo-alterar-produto.component';
import { CarrinhoPageComponent } from './carrinho-page/carrinho-page.component';
import { DialogoCarrinhoComponent } from './carrinho-page/dialogo-carrinho/dialogo-carrinho.component';
import { DialogoAlterarCarrinhoComponent } from './carrinho-page/dialogo-alterar-carrinho/dialogo-alterar-carrinho.component';

import { CompraPageComponent } from './compra-page/compra-page.component';
import { NotaPageComponent } from './nota-page/nota-page.component';
import { DialogoCompraComponent } from './compra-page/dialogo-compra/dialogo-compra.component';
import { DialogoNotaComponent } from './nota-page/dialogo-nota/dialogo-nota.component';
import { CompraService } from './services/compra.service';
import { NotaService } from './services/nota.service';

import { AdicionarProdutosAoCarrinhoComponent } from './carrinho-page/dialogo-produtos-carrinho/adicionar-produtos-ao-carrinho/adicionar-produtos-ao-carrinho.component';
import { AlterarProdutosCarrinhoComponent } from './carrinho-page/dialogo-produtos-carrinho/alterar-produtos-carrinho/alterar-produtos-carrinho.component';
import { ListarProdutosCarrinhoComponent } from './carrinho-page/dialogo-produtos-carrinho/listar-produtos-carrinho/listar-produtos-carrinho.component';


const appRoutes: Routes = [
	{ path: 'marca-page', component: MarcaPageComponent },
  { path: 'pessoa-page', component: PessoaPageComponent },
  { path: 'produto-page', component: ProdutoPageComponent},
  { path: 'nota-page', component: NotaPageComponent },
  { path: 'compra-page', component: CompraPageComponent },
  { path: 'carrinho-page', component: CarrinhoPageComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		MyNavComponent,
		MarcaPageComponent,
		PessoaPageComponent,
		DialogoMarcaComponent,
		DialogoPessoaComponent,
		ProdutoPageComponent,
		DialogoProdutoComponent,
		DialogoAlterarProdutoComponent,
		CarrinhoPageComponent,
		DialogoCarrinhoComponent,
		DialogoAlterarCarrinhoComponent,
    ListarProdutosCarrinhoComponent,
    AdicionarProdutosAoCarrinhoComponent,
    AlterarProdutosCarrinhoComponent,
		CompraPageComponent,
		NotaPageComponent,
		DialogoCompraComponent,
		DialogoNotaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		LayoutModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
    MatSelectModule,
		HttpClientModule,
		MatSnackBarModule,
		MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatTabsModule,
    MatBadgeModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		NotificacaoService,
		MarcaService,
    PessoaService,
    ProdutoService,
    CarrinhoService,
	ProdutoCarrinhoService,
	CompraService,
	NotaService
	],
	entryComponents: [
		DialogoMarcaComponent,
    DialogoPessoaComponent,
    DialogoProdutoComponent,
    DialogoAlterarProdutoComponent,
    DialogoCarrinhoComponent,
	  DialogoAlterarCarrinhoComponent,
	  DialogoCompraComponent,
    DialogoNotaComponent,
    ListarProdutosCarrinhoComponent,
    AdicionarProdutosAoCarrinhoComponent,
    AlterarProdutosCarrinhoComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	bootstrap: [AppComponent]
})
export class AppModule { }
