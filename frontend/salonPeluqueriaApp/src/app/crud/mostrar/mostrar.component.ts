import { Component,TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SalonbellezaService } from 'src/app/services/salonbelleza.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent {
  lista:any=[];
  totalProductos:number=0;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;


  constructor(public dialog: MatDialog,private salonbellezaservice:SalonbellezaService,private router:Router){}
    
  
  
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

    

  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']



  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
    myTempDialog.afterClosed().subscribe((res) => {

      // Data back from dialog
      console.log({ res });
    });
  }
    
}
