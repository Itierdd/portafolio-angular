import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 

  this.cargarProductos(); 

  }

  private cargarProductos(){

    this.http.get('https://angular-html-82333-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) => {

      /*llamar productos a consola*/
      /*console.log(resp)*/
      this.productos = resp;
      this.cargando = false;
      //Carga de animacion svg
      /*setTimeout(() => {
        this.cargando = false;
      }, 1000);*/

    });
  }

  getProducto(id: string ){

    return this.http.get(`https://angular-html-82333-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

}
