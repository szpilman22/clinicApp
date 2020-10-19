import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent {

public labels1: string[] = ['Pan', 'Refrescos', 'Tacos'];
public data1 = [
  [10, 15, 40],
]

public labels2: string[] = ['Harina', 'Huevos', 'Pasta'];
public data2 = [
  [250, 100, 300],
]

}
