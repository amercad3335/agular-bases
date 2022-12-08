import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado!')
    }

    agregarPersonaje( personaje: Personaje ): void {
    
        this._personajes.push( personaje );
  
      }

}