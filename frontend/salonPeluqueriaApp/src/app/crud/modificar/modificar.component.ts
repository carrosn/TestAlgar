import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { productos } from 'src/app/modelo/productosdto';
import { SalonbellezaService } from 'src/app/services/salonbelleza.service'; 

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  productoAct :productos={codigo:0,titulo:'',descripcion:'',estado:'',cantidadAp:0,precio:0};
  id:number=0;


  constructor(private productoservice:SalonbellezaService,private router:Router,private acivateRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.id= Number(this.acivateRouter.snapshot.paramMap.get('id') || '' );
    this.productoservice.getProductoByNumero( this.id).subscribe({
      next: (v) => {this.productoAct=v;
        console.log(v);
      },
       //next: (v) => this.lista=v,
       error: (e) => console.error(e),
       complete: () => console.info('complete') 
    })
       
       
    
    console.log(this.id);
    this.show();
  }

  modificar(){
    this.productoservice.editProductos(this.productoAct).subscribe({
    
        next: (v) => {console.log(v)
        this.router.navigate(['/salonbelleza']);
        
        },
        
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    });
  
  }
  regresar(){
    
    this.router.navigate(['/salonbelleza']);
    
  }
  show() {
    let ej = new NavBarComponent();
   ej.showData();
   
  }
}
