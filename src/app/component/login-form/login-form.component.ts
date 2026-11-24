import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginFormService } from './login-form.service';
@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login-form',
  styleUrl: './login-form.component.css',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {

  numeroservice: any = '';
  constructor(numeroService: LoginFormService) {
    this.numeroservice = numeroService;
  }

  slink = signal(false);
  nombre = signal(0);

  
  onSubmit() {
    let numero = this.numeroservice.numero;
    console.log(this.numeroservice.numero());
    const valor = this.nombre();
    if (valor > 0) {
      this.slink.set(true);
      numero.set(valor);
    } else {
      this.slink.set(false);
      numero.set(valor);
    }
    console.log(this.numeroservice.numero())
  }

  changeName(value: any) {
    // Tomamos nuestra cajita local 'nombre' y le metemos el nuevo valor (.set)
    // para recordar lo que el usuario está escribiendo.
    this.nombre.set(value);
  }
}
