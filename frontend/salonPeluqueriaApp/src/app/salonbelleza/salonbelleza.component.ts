import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { SalonbellezaService } from '../services/salonbelleza.service';

@Component({
  selector: 'app-salonbelleza',
  templateUrl: './salonbelleza.component.html',
  styleUrls: ['./salonbelleza.component.css']
})
export class SalonbellezaComponent implements OnInit{
  
  lista:any=[];
totalProductos:number=0;
constructor(private salonbellezaservice:SalonbellezaService,private router:Router){}
  ngOnInit(): void {
    // this.show();
    this.listarProductos();
    
    
  }

  listarProductos(){

   


    this.salonbellezaservice.getProductos().subscribe({
     
         next: (v) => this.lista=v,
       
        error: (e) => console.error(e),
        complete: () => {console.info('complete') 

        this.totalProductos = this.lista.reduce((
          acc:any,
          obj:any,
        ) => acc + (obj.precio * obj.cantidadAp ),
        0);
        console.log("Total: ", this.totalProductos)}
        
    });

    
    
    }
  
  
    eliminarProductos(id:number){
      this.salonbellezaservice.delProductos(id).subscribe({
       
           next: (v) => {console.log(v);
            
            this.ngOnInit();
            
            },
         
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
      });
    }
  //   show() {
  //     let ej = new NavBarComponent();
  //    ej.showData();
     
  //   }
  // hiddeData() {
  //   let ej = new NavBarComponent();
  //  ej.hiddeData();
   
  // }
  

}
