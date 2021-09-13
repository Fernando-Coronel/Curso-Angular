import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ titulo }} </h1>

    <button (click)=" acumular(+1)"> + 1 </button>

    <span> {{ numero }} </span>

    <button (click)=" acumular(-1) "> - 1 </button>


    <h3>{{ titulo }}</h3>

    <button (click)="acumular( base )"> + {{base}} </button>

    <span> {{ numero }}</span>

    <button (click)="acumular( -base )"> - {{base}} </button>

    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
   numero: number = 10;
   base: number = 5;

   acumular( valor: number ){
    this.numero += valor;
   }
}