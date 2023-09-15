import { productos } from "./productosdto";

export interface pedido{
    productos:Array<productos>;
    cedula:number;
    direccion:string;
}