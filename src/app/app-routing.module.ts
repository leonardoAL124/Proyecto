import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { OfertasComponent } from './screens/ofertas/ofertas.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { Error404Component } from './screens/error404/error404.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { DetalleProductosComponent } from './screens/detalle-productos/detalle-productos.component';
import { usuarioGuard } from './guards/usuario/usuario.guard';
import { DetalleOfertasComponent } from './screens/detalle-ofertas/detalle-ofertas.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"productos", component:ProductosComponent},
  {path:"ofertas", component:OfertasComponent},
  {path:"nosotros&terminos-condiciones", component:NosotrosComponent},
  {path:"contactos", component:ContactosComponent},
  {path:"registro",component:FormRegistroComponent},
  {path:"detProds/:id", component: DetalleProductosComponent, canActivate: [usuarioGuard]},
  {path:"detOfertas/:id",component: DetalleOfertasComponent},
  {path:"lista-usuarios",component:TablaUsuariosComponent},

  {path:"**", component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
