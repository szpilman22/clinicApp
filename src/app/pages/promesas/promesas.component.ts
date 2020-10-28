import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsers().then( users => console.log(users));

    // const promesa = new Promise( (resolve, reject) => {

    //   if (false) {
    //     resolve('Este el resolve');
    //   } else {
    //     reject('Esto es el reject');
    //   }

    // });

    // promesa.then( (res) => {
    //   console.log(res);
    // })
    // .catch( err => console.log(err) );
}

  getUsers() {

    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json() )
        .then( body => console.log(body.data) );
    });


  }



}
