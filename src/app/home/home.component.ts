import { Component, ElementRef, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const typed = new Typed(this.elementRef.nativeElement.querySelector('.typing'), {
      strings: ["Web Designer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
}
