import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule }  from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="Bridgelabzlogo.jpg";
  userName: string = '';
  nameError: string = '';

  ngOnInit(): void {
    this.title="Hello from Bridgelabz!!!! ";
  }
  onClick($event : any){
    console.log("Save button is clicked!!!",$event);
    window.open('https://www.bridgelabz.com/',"_blank");
  }
  
  onInput($event : any){
    console.log("Change Event Occured!!!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = '';
      return;
    }
    this.nameError = 'Name is Incorrect!!!';
    
  }
}

