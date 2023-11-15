import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: string = "";
  @ViewChild(ChildComponent) child !: ChildComponent;
  constructor(private cd : ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.message = this.child.childData;
    this.cd.detectChanges();
    console.log(this.child.childData); 
  }
  ngOnInit(): void {
   
  }
}
