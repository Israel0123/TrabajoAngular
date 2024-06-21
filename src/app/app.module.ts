import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';  // Importa el módulo de usuarios
import { AuthModule } from './auth/auth.module';  // Importa el módulo de autenticación

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,  // Importa el módulo de usuarios
    AuthModule  // Importa el módulo de autenticación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

