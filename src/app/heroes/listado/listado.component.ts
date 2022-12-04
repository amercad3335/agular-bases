import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes    : string[] = ['Batman', 'Superman', 'Flecha Verde', 'Acuaman', 'Linterna Verde'];
  eliminado!: string;

  borrarHeroe(): void {
    this.eliminado = this.heroes.pop() || '';
  }
}
