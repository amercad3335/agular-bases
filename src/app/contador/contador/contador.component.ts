import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>La base es: {{ base }}</h3>

        <button (click)="acumulador(-base)">-{{ base }}</button>

        <span>{{ numero }}</span>

        <button (click)="acumulador(base)">+{{ base }}</button>
    `,
    styleUrls: ['../../app.component.css']
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    base: number = 1;
    numero: number = 10;

    acumulador = (numero: number): number => this.numero += numero;
}