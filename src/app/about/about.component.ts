import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About Us';
  age = 22;
  info = {email: "mmm@gmail.com"};
  img = "./assets/img/flower.jpg";
  imgWidth = 200;
  // imgShow = true;
  isShow = false;
  users = ['John', ['Pop'], ['Lis']];
  cousrses = [
    {name: 'PHP', price: 800},
    {name: 'HTML', price: 600},
    {name: 'JavaScript', price: 400},
  ];
  myColor = 'yellow';
  isActive = false;

  constructor(private titleBar: Title) { 
   
  }

  ngOnInit() {
    this.title = 'About';
    this.titleBar.setTitle('เกี่ยวกับ')
  }

  go(){
    // alert("hello");
    this.title = 'เกี่ยวกับ';
    this.img = "./assets/img/winter.jpg";
    this.imgWidth = 300;
    // this.imgShow = !this.imgShow;
    // this.isShow = true;
    this.isShow = !this.isShow;
    this.myColor = 'red';
    this.isActive = true;
  
  }


}
