import { ChangeDetectorRef, Component,Input,TemplateRef, ViewChild  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SalonbellezaService } from '../services/salonbelleza.service';
import { Router } from '@angular/router';
import { pedido } from '../modelo/pedidodto';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;
  
  lista:any=[];
  listaPedido:any=[];
  totalProductos:number=0;
  cantidad:number=0;
  totalPedido:number=0;
  mostrarDatos:boolean=false;
  pedido:pedido |any;
  cedula:number=0;
  direccion:string="";
  @Input() index:any;
  @Input() element:any; //element.value = 0
  constructor(public dialog: MatDialog,private salonbellezaservice:SalonbellezaService,private router:Router,private cdRef:ChangeDetectorRef){}
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
  
  
  agregarProducto(id:number){

    var obj=this.lista.find((x: any) => x.codigo === id);


  
this.listaPedido.push(obj);

this.totalPedido = this.listaPedido.reduce((
  acc:any,
  obj:any,
) => acc + (obj.cantidad * obj.precio),
0);


    
    
  }

  quitarProducto(id:number){
    //var obj=this.listaPedido.find((x: any) => x.codigo === id);
    var index:number = this.listaPedido.indexOf(this.listaPedido.find((x: any) => x.codigo === id));
    this.listaPedido.splice(index, 1);
   
    this.totalPedido = this.listaPedido.reduce((
      acc:any,
      obj:any,
    ) => acc + (obj.cantidad * obj.precio),
    0);
  }
  
  onChangeEvent(event: any,id:number){
    
    var obj=this.listaPedido.find((x: any) => x.codigo === id);
    
    obj.cantidad=event.target.value;
    this.totalPedido = this.listaPedido.reduce((
      acc:any,
      obj:any,
    ) => acc + (obj.cantidad * obj.precio),
    0);

    console.log(event.target.value);
  }
  datosEntrega(){

    this.mostrarDatos=true;
  }

    
  guardarPedido(){

    this.pedido.productos=this.listaPedido;
    this.pedido.cedula=this.cedula;
    this.pedido.direccion=this.direccion;


    this.salonbellezaservice.savePedido(this.pedido).subscribe({
    
      next: (v) => {console.log(v)
      this.router.navigate(['/pedidos']);
      
      },
      
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  });

  }
}
