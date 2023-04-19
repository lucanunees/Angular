import { getLocaleDateFormat, getLocaleDayNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  public listTarefas: Tarefas[] = [];

  //Visualizar os exemplos de variaveis
  public visualizarTarefas: string = 'Tarefas Diárias';

  //Criando o formsGroup
  public form: FormGroup;

  //Adicionando valor a minha array de variavelExemplo, de acordo com a classe definida.
  constructor(private fb: FormBuilder) {

    //Instanciando o form:
    this.form = this.fb.group({ //Aqui estou criando um group dentro do formBuilder
      titleForm: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60), // Estou definindo que o nosso formulario o titulo, tem que ter minimo 3 caracteres maximo 60.
        Validators.required, //E aqui estou definindo que ele é requerido, obrigatorio.
      ])]
    });

    // Agora já conseguimos adicionar a tarefa através do método add().
    //this.listTarefas.push(new Tarefas(1, 'Trabalhar horario comercial', false));
    //this.listTarefas.push(new Tarefas(2, 'Ir no mercado', false));
    //this.listTarefas.push(new Tarefas(3, 'Ir para a academia', true));
    //this.listTarefas.push(new Tarefas(4, 'Estudar', false));
  }

  add() {
    //Primeiro iremos recuperar o valor que foi setado dentro de titleForm
    const titleForm = this.form.controls['titleForm'].value;

    //Adicionando conforme itens da lista +1
    const id = this.listTarefas.length +1;

    //Adicionando a tarefa a lista.
    this.listTarefas.push(new Tarefas(id,titleForm,false));

    //chamando o método de salvar
    this.save();

    //Chamo o método que limpa o forms depois de inserir na lista
    this.clear()
  }

  //No caso o método vai esperar um tipo Tarefas.
  remove(list : Tarefas){
    //Desta forma eu irei saber o index que o todo esta me passando, para poder remover da lista.
    //Se caso não existir ele retorna -1
    const index = this.listTarefas.indexOf(list);

    //validação de segurança
    if(index !== -1){
      //Aqui eu estou passando o index que quero e quantos eu quero deletar.
      this.listTarefas.splice(index, 1);
    }
  }

  save() {
    // O json.stringify converte um objeto json para string.
    const data = JSON.stringify(this.listTarefas);

    //Salvando em LocalStorage e ele pede chave e valor
    //chave = listTarefas
    //valor = data(meu objeto json convertido para string)
    localStorage.setItem('listTarefas', data)
  }

  // Aqui eu já recebo o objeto como referencia, por isso não preciso utilizar o this.
  // Não sendo preciso percorrer um foreach para achar o index, pois ja está sendo passado, por referencia.
  markAsDone(list : Tarefas){
    list.done = true;
  }

  markAsUndo(list : Tarefas){
    list.done = false;
  }

  clear() {
    this.form.reset();
  }
}
