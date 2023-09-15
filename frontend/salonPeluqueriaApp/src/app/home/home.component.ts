import { Component, OnInit } from '@angular/core';

import { SalonbellezaService } from '../services/salonbelleza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lista:any=[];
constructor(private salonbellezaService:SalonbellezaService){}
  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
  this.salonbellezaService.getProductos().subscribe({
   
       next: (v) => this.lista=v,
      
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });





  }


}
