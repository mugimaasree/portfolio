import { Component, OnInit } from '@angular/core';

class Product {
  constructor(public webpageUrl: string, public image: string, public title: string) {}
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  productList: Product[] = [
    new Product('https://mugimaasree.github.io/weatherApp/weather','pic.png','weatherApp'),
        new Product('https://mugimaasree.github.io/currency/currency','pic2.png','CurrencyConverter'),
        new Product('https://mugimaasree.github.io/ToDo/','pic6.png','ToDoList'),
        new Product('https://mugimaasree.github.io/list/','pic7.png','ShowList'),
        new Product('https://mugimaasree.github.io/coordinates/input','pic5.png','coodinate'),
        new Product('https://mugimaasree.github.io/imageGallery/','pic8.png','Gallery'),
        new Product('https://mugimaasree.github.io/Dropdown/','pic9.png','DropDown'),
        new Product('https://mugimaasree.github.io/ngModel/','pic10.png','ngModel(sample)'),
        new Product('https://incubationwork.github.io/mugimaasree/sample/Quiz/Quiz.html','pic3.png','Quiz'),
        new Product('https://incubationwork.github.io/mugimaasree/sample/operator.html','pic4.png','Operator'),
        new Product('https://incubationwork.github.io/mugimaasree/car-Rental/car-Rental.html','pic11.png','Car Rental'),
        new Product('https://incubationwork.github.io/mugimaasree/css-flex/flex.html','pic12.png','Flex Layout'),
        new Product('https://incubationwork.github.io/mugimaasree/css-grid/Grid.html','pic13.png','Grid Layout'),
        new Product('https://incubationwork.github.io/mugimaasree/flickr/flickr1.html','pic14.png','Flickr Page'),
        new Product('https://incubationwork.github.io/mugimaasree/html/all-html/alltag.html','pic15.png','HtmlTags'),
        new Product('https://incubationwork.github.io/mugimaasree/javascript-sample/javascript.html','pic16.png','Javascript(samples)'),
        new Product('https://incubationwork.github.io/mugimaasree/js-sample/count/counter.html','pic17.png','counter'),
        new Product('https://incubationwork.github.io/mugimaasree/js-sample/formValidation/form-validation.html','pic18.png','Form Validation'),
        new Product('https://incubationwork.github.io/mugimaasree/sample/Snake/snake.html','pic19.png','Snake Game'),
        new Product('https://incubationwork.github.io/mugimaasree/sample/Agecalculator/agecalculator.html','pic20.png','Age Calculator'),
        new Product('https://incubationwork.github.io/mugimaasree/sample/DigitalClock/digital.html','pic21.png','Digital Clock'),
        new Product('https://incubationwork.github.io/mugimaasree/currency%20converter/currency.html','pic22.png','currency converter(javascript)'),
        new Product ('https://incubationwork.github.io/mugimaasree/portfolio/portfolio.html','pic23.png','portfolio')
  ];

  constructor() {}

  ngOnInit(): void {}
}
