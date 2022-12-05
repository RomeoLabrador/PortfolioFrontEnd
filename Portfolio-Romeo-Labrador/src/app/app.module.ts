import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SocialComponent } from './components/header/social/social.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { PresentacionComponent } from './components/header/presentacion/presentacion.component';
import { ContenedorComponent } from './components/navegacion/contenedor/contenedor.component';
import { BotonEstudiosComponent } from './components/navegacion/boton-estudios/boton-estudios.component';
import { BotonHabilidadesComponent } from './components/navegacion/boton-habilidades/boton-habilidades.component';
import { BotonCertificadosComponent } from './components/navegacion/boton-certificados/boton-certificados.component';
import { DisplayComponent } from './components/display/display.component';
import { EstudiosTokenComponent } from './components/display/estudios-token/estudios-token.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    LoginButtonComponent,
    PresentacionComponent,
    ContenedorComponent,
    BotonEstudiosComponent,
    BotonHabilidadesComponent,
    BotonCertificadosComponent,
    DisplayComponent,
    EstudiosTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
