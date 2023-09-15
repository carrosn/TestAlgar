import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { productos } from 'src/app/modelo/productosdto';
import { SalonbellezaService } from 'src/app/services/salonbelleza.service'; 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  productoNueva :productos={codigo:0,titulo:'',descripcion:'',estado:'',cantidadAp:0,precio:0};
  constructor(private salonbellezaservice:SalonbellezaService,private router:Router){}
  ngOnInit(): void {this.show();}


agregar(){
  this.salonbellezaservice.saveProducto(this.productoNueva).subscribe({
  
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
hiddeData() {
  let ej = new NavBarComponent();
 ej.hiddeData();
 
}

}
