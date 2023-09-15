import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../modelo/productosdto';
import { pedido } from '../modelo/pedidodto';

@Injectable({
  providedIn: 'root'
})
export class SalonbellezaService {
  url='http://localhost:8282/api/productos';

  constructor(private http:HttpClient) { }

  getProductos():Observable<any>{
   
    
    return this.http.get(this.url);

  }
  getProductoByNumero(id: number ):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveProducto(producto:productos):Observable<any>{
    return this.http.post(this.url,producto);
  }

  editProductos(producto:productos):Observable<any>{
    return this.http.put(this.url,producto);
  }
  delProductos(id: number):Observable<any>{
    return this.http.delete(this.url+'/'+id);
      
  }

  savePedido(pedido:pedido):Observable<any>{
    return this.http.post(this.url,pedido);
  }

}
