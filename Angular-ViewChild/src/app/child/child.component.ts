import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  childData : string = "This Data from Child Component";
  constructor(){}
  ngOnInit(): void {
      
  }

}
