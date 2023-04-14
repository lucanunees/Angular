import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefas } from 'src/Models/tarefas.model'; //Realizada a importação da classe que iremos utilizar.

@Component({
  selector: 'app-root', //<app-root></app-root>
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

  //Criando o formsGroup
  public form: FormGroup;

  //Adicionando valor a minha array de variavelExemplo, de acordo com a classe definida.
  constructor(private fb: FormBuilder) {

    //Instanciando o form:
    this.form = this.fb.group({ //Aqui estou criando um group dentro do formBuilder
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60), // Estou definindo que o nosso formulario o titulo, tem que ter minimo 3 caracteres maximo 60.
        Validators.required //E aqui estou definindo que ele é requerido, obrigatorio.
      ])]
    })

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

  // Aqui eu já recebo o objeto como referencia, por isso não preciso utilizar o this.
  // Não sendo preciso percorrer um foreach para achar o index, pois ja está sendo passado, por referencia.
  markAsDone(list : Tarefas){
    list.done = true;
  }

  markAsUndo(list : Tarefas){
    list.done = false;
  }

}
