import { Component } from '@angular/core';
import { Tarefas } from 'src/Models/tarefas.model'; //Realizada a importação da classe que iremos utilizar.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoInicial';

  //Podemos criar variavel publica do tipo any, é uma array (lista).
  //Desta forma, criamos a variavel e tipando ela com a nossa classe.
  public variavelExemplo: Tarefas[] = [];

  //Visualizar os exemplos de variaveis
  public visualizarVariaveis: string = 'Tarefas Diárias';

  //Adicionando valor a minha array de variavelExemplo, de acordo com a classe definida.
  constructor() {
    this.variavelExemplo.push(new Tarefas(1, 'Trabalhar horario comercial', false));
    this.variavelExemplo.push(new Tarefas(2, 'Ir no mercado', false));
    this.variavelExemplo.push(new Tarefas(3, 'Ir para a academia', true));
    this.variavelExemplo.push(new Tarefas(4, 'Estudar', false));
  }

  //No caso o método vai esperar um tipo Tarefas.
  remove(list : Tarefas){
    //Desta forma eu irei saber o index que o todo esta me passando, para poder remover da lista.
    //Se caso não existir ele retorna -1
    const index = this.variavelExemplo.indexOf(list);

    //validação de segurança
    if(index !== -1){
      //Aqui eu estou passando o index que quero e quantos eu quero deletar.
      this.variavelExemplo.splice(index, 1);
    }
  }

  markAsDone(){

  }

  markAsUndo(){

  }

}
