import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Default data Display
  taskArray = [{ isCompleted: false, fname: 'Name', city: 'Kozhikode', email0: 'sachisavera@gmail.com', phone: '+91 9916183187'}];
  constructor() {}
  ngOnInit(): void {
  }
// Submit Method 
  onSubmit(form: NgForm) {
    console.log(form);
      this.taskArray.push({
      fname: form.controls['fname'].value,
      city: form.controls['city'].value,
      email0: form.controls['email0'].value,
      phone: form.controls['phone'].value,
      isCompleted: false
    })
    form.reset();
  }
// Delete Method 
  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }
// Checkbox Checked Method 
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
