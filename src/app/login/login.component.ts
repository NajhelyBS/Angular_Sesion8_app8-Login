import { Component, Input } from '@angular/core';
import { Number } from 'mongoose';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() usuario:String = "Angular";
  @Input() password = "123456";

  verificar(input1:String,input2){
   
    if (input1 == this.usuario && input2 == this.password){
      alert("Correcto");
    } else {
      alert("Incorrecto")
    }
  }
   
}
