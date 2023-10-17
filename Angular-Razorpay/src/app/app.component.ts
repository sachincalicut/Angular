import { Component } from '@angular/core';

declare var Razor: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payNow(){
    const RazorPayOptions = {
        description: 'Razor Pay Amount',
        currency: 'INR',
        amount: 10,
        name: 'Sachin Chanduveetil',
        // RazorPay > Account settings > API Key , Copy and Paste Key ID from Razor Pay Account.
        key: '', 
        image: '',
        prefill: {
          name: 'Sachin CV',
          email: 'sachisavera@gmail.com',
          phone: '9916183187'
        },
        theme:{
          color:'#f37254'
        },
        modal: {
          ondismiss: () => {
              console.log('dismiss')
          }
        }

    }
    const successCallback = (payment: any) => {
        console.log(payment);
    }
    const failureCallback = (e: any) => {
      console.log(e)
    }
    Razor.open(RazorPayOptions,successCallback, failureCallback);

  }
}
