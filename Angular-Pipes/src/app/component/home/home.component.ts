import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(){}
    ngOnInit(): void {
        
    }
    country: any=['India', 'France', 'Russia', 'Israel'];

    add(value: any){
      this.country.push(value);
      console.log(this.country);

    }
}
