import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginEntity } from 'src/app/shared/entity/LoginEntity';
import Imagen from 'src/app/shared/imagen/Imagen';
import { LoginValidationService } from '../../service/login-validation/login-validation.service';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  formularioLogin:FormGroup;

  imagenLogin = Imagen.IMG_LOGIN;

  constructor (private router: Router, public formulario: FormBuilder, public loginValidation: LoginValidationService, private route: ActivatedRoute){
    this.formularioLogin = this.formulario.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  navegarEntrePaginas(){
    this.router.navigate(["admin-page-principal"]);
  }

  login(): void{

    if (this.formularioLogin.valid) {
      
      const datosLogin: LoginEntity = this.formularioLogin.value;

      if (datosLogin.email === "unsc@gmail.com" && datosLogin.password === "123456") {
        this.router.navigate(['admin-page-principal'], { relativeTo: this.route })
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

    const datosLogin: LoginEntity = this.formularioLogin.value;

    this.loginValidation.validarDatosLogin(datosLogin).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigateByUrl("login-laciguenia/admin-page-principal");
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
