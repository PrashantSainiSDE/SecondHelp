import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';



@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit,AfterViewInit {

  constructor(private elementRef :ElementRef ) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    var s = document.createElement("script");
    var f = document.createElement("form")

    s.src = "https://checkout.razorpay.com/v1/payment-button.js" ;
    s.setAttribute('data-payment_button_id', 'pl_LT2jEsz0e0kTo3');
    s.async;
    f.style.textAlign = 'center'
   f.style.marginTop = '100px'
    f.appendChild(s);
    this.elementRef.nativeElement.appendChild(f);
  }

   }

