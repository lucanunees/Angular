import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoInicial';
  
  //Exemplo de variavel publica do tipo any, é uma array (lista). 
  public variavelExemplo: any[] = [];
  public visualizarVariaveis: string = 'Visualizar os exemplos de variaveis';

  constructor(){
    this.variavelExemplo.push('Adicionando uma string');
    this.variavelExemplo.push(1997); //adicionando um int.
    this.variavelExemplo.push(new Date()); // adicionando uma data.
  }
}
