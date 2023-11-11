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
import { TarjetasProductosComponent } from './components/tarjetas-productos/tarjetas-productos.component';

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
    TarjetasProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
