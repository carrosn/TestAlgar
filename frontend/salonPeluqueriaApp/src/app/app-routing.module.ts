import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalonbellezaComponent } from './salonbelleza/salonbelleza.component';
import { MostrarComponent } from './crud/mostrar/mostrar.component';
import { AgregarComponent } from './crud/agregar/agregar.component';
import { ModificarComponent } from './crud/modificar/modificar.component';
import { PedidosComponent } from './pedidos/pedidos.component';


  



@NgModule({
  imports: [RouterModule.forRoot([
    {path :'' , component: SalonbellezaComponent },
    {path :'inicio' , component: HomeComponent },
    {path :'salonbelleza' , component: SalonbellezaComponent},
    {path :'agregar' , component: AgregarComponent},
    {path :'pedidos' , component: PedidosComponent},
    {path :'mostrar' , component: MostrarComponent},
    {path :'modificar/:id' , component: ModificarComponent},
    {path :'**' , redirectTo: '/',pathMatch:'full'}

 
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
