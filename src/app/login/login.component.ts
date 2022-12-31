import { Component, Input } from '@angular/core';
import { Number } from 'mongoose';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario:String = "Angular";
  password:String = "123456";

  grupo1 = [" "];


  verificar(input1:String,input2:String){
    
    if (input1 == this.usuario && input2 == this.password){

      this.grupo1.push(String("Home"));
      this.grupo1.push(String("Support"));
      this.grupo1.push(String("Contact"));

      var correcto = document.getElementById('correcto') as HTMLElement;
      correcto.style.display = 'block';
      var correcto = document.getElementById('incorrecto') as HTMLElement;
      correcto.style.display = 'none';
 
    } else {

      var correcto = document.getElementById('incorrecto') as HTMLElement;
      correcto.style.display = 'block';
      var correcto = document.getElementById('correcto') as HTMLElement;
      correcto.style.display = 'none';
    
    }

  }
   
}
