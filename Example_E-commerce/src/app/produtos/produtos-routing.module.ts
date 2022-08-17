import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealhesProdutoComponent } from './dealhes-produto/dealhes-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  {path:':id', component: DealhesProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
