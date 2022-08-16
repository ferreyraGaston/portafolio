import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { BodyComponent } from './shared/components/body/body.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { PerfilComponent } from './shared/components/perfil/perfil.component';
import { MensajesComponent } from './shared/components/mensajes/mensajes.component';
import { HabilidadesComponent } from './shared/components/habilidades/habilidades.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component: BodyComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'mensaje', component: MensajesComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
