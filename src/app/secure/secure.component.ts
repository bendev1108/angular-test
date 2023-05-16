import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  UnSafeUrl = 'javascript:alert("ok")';
  SafeUrl: SafeUrl;
  UnSafeYoutube = 'https://www.youtube.com/embed/wwkqOq5g_XM';
  SafeYoutube:  SafeResourceUrl;

  constructor(protected domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(this.UnSafeUrl);
    this.SafeYoutube = this.domSanitizer.bypassSecurityTrustResourceUrl(this.UnSafeYoutube);
  }

}
