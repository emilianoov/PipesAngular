import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = "Emiliano";
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }


  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Melisa', 'Jorge', 'Eduardo', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person ={
    name: 'Emiliano',
    age: '24',
    address: 'Queretaro'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  );

  public promiseValue = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.');
    }, 3500)
  })
}
