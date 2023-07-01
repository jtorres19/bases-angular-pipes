import {Component} from '@angular/core';
import {interval, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  name: string = 'Fernando';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  };

  clients: string[] = ['María', 'Pedro', 'José', 'Alfredo', 'Marta', 'Juan', 'Bianca', 'Rosa'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  person = {
    name: 'Juan',
    age: '30',
    address: 'Limache'
  }

  myObservableTimer = interval(1000)
    .pipe(
      tap(console.log),
    );
  promiseValue = new Promise(resolve => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.shift();
  }
}
