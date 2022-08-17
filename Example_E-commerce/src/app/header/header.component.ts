import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  produto(){
    this.router.navigate(["produtos"])
  }
  carroDeCompras(){
    this.router.navigate(["carrinho"])
  }
  contato(){
    this.router.navigate(["contato"])
  }

}
