import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { OfertasComponent } from './screens/ofertas/ofertas.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { Error404Component } from './screens/error404/error404.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetalleProductosComponent } from './screens/detalle-productos/detalle-productos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaDetallesProductosComponent } from './components/tabla-detalles-productos/tabla-detalles-productos.component';
import { FormProductosComponent } from './components/form-productos/form-productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    OfertasComponent,
    NosotrosComponent,
    ContactosComponent,
    Error404Component,
    FormRegistroComponent,
    FormLoginComponent,
    DetalleProductosComponent,
    TablaDetallesProductosComponent,
    FormProductosComponent,
    TablaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
