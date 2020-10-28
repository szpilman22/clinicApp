import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  constructor() {



  }

  retornaIntervalo() {
    const intervalo = interval(1000);

    return intervalo;
  }

}
