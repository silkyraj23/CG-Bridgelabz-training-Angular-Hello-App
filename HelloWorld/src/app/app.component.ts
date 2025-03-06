import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="Bridgelabzlogo.jpg";

  ngOnInit(): void {
    this.title="Hello from Bridgelabz!!!! ";
  }
  onClick($event : any){
    console.log("Save button is clicked!!!",$event);
    window.open('https://www.bridgelabz.com/',"_blank");
  }
}

