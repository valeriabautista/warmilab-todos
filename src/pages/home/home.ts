import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
    {
      description: "lavar los platos",
      done: true
    },
    {
      description: "hacer las tareas",
      done: false
    },
    {
      description: "tender la cama",
      done: true
    },
    {
      description: "sacar a pasear al perro",
      done: true
    }
  ];

  botones: any[] = [
    {
      color: "secondary",
      grande: false,
      texto: "terminados"
    },
    {
      color: "danger",
      grande: false,
      texto: "pendientes"
    },
    {
      color: "dark",
      grande: true,
      texto: "todos"
    }
  ];

  filtro: string = "todos";

  constructor(
    public navCtrl: NavController,
    private todoService: TodoService) { }

  ngOnInit() {
    // codigo al iniciar el componente
    this.agregarQuehacer("comer", false);
    this.agregarQuehacer("estudiar", true);
    this.agregarQuehacer("armar el cubo de rubik", true);
  }
  listarQuehaceres() {
    if (this.filtro === "todos") {
      return this.quehaceres;
    } else if (this.filtro === "pendientes") {
      return this.quehaceres.filter(quehacer => !quehacer.done);
    } else if (this.filtro === "terminados") {
      return this.quehaceres.filter(quehacer => quehacer.done);
    }
  }


  agregarQuehacer(nuevoQuehacer: string, terminado: boolean) {
    if (nuevoQuehacer !== "") {
      this.quehaceres.push({
        description: nuevoQuehacer,
        done: terminado
      });

    }
  }
   actualizarQuehacer(checked: boolean, componente) {
     componente.done= checked;

   }

  filtrarQuehaceres(texto: string) {
    if (texto === "terminados") {
      this.filtro = "terminados";
      this.botones[0].grande = true;
      this.botones[1].grande = false;
      this.botones[2].grande = false;
    } else if (texto === "pendientes") {
      this.filtro = "pendientes";
      this.botones[1].grande = true;
      this.botones[2].grande = false;
      this.botones[0].grande = false;
    } else if (texto === "todos") {
      this.filtro = "todos";
      this.botones[2].grande = true;
      this.botones[1].grande = false;
      this.botones[0].grande = false;

    }
  }


}
