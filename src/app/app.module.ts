import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BodyComponent } from './shared/components/body/body.component';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { HabilidadesComponent } from './shared/components/habilidades/habilidades.component';
import { MensajesComponent } from './shared/components/mensajes/mensajes.component';
import { PerfilComponent } from './shared/components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactoComponent,
    PagenotfoundComponent,
    HabilidadesComponent,
    MensajesComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
