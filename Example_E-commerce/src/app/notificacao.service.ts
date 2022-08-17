import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notificar(mensagem:string){
    //Abre uma snackBar com a mensaem a ação e as configurações.
    this.snackBar.open(mensagem, "Ok",{
      duration:2000,
      verticalPosition: "top",
      horizontalPosition:"center"
    })
  }
}
