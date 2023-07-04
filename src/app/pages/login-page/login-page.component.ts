import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/entity/Login';
import { ValidacionLoginService } from 'src/app/service/login-service/validacion-login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  formularioLogin:FormGroup;

  constructor (private router: Router, public formulario: FormBuilder, public validacionDatos: ValidacionLoginService){
    this.formularioLogin = this.formulario.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  navegarEntrePaginas(){
    this.router.navigate(["/admin-page-principal"]);
  }

  login(): void{

    if (this.formularioLogin.valid) {
      
      const datosLogin: Login = this.formularioLogin.value;

      if (datosLogin.email === "unsc@gmail.com" && datosLogin.password === "123456") {
        this.router.navigateByUrl("/admin-page-principal");
      } 
      else {
        alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
      }
    }
    else{
      this.formularioLogin.markAllAsTouched();
      return;
    }
  }

  //Metodo Original Para enviar peticiones Http al lado del Servidor.
  loginOriginal(): void {

    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const datosLogin: Login = this.formularioLogin.value;

    this.validacionDatos.validarDatosLogin(datosLogin).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigateByUrl("/admin-page-principal");
        } 
        else {
          alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
        }
      },
      (error: any) => {
        console.error(error);
        alert("Error en el inicio de sesión. Por favor, inténtalo de nuevo.");
      }
    );
  }
}