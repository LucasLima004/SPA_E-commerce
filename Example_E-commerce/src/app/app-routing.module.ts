import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  {path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  //Ativa toda vez que não tiver nenhuma rota selecionada.
  //Redireciona quando abrir a página diretamente parao local determinado.
  //PathMatch define o tipo de avaliação da URL.
  {path:"", redirectTo: "produtos", pathMatch:"full"},
  { path: "carrinho", loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  {path:"**", component: NaoEncontradaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
