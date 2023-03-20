import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faIns = faInstagram;
  faFac =faFacebook;
  faTwi =faTwitter;
  constructor() { }

  ngOnInit() {
  }

}
