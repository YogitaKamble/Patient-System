import { Component, OnInit } from '@angular/core';
import $ from 'Jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor() {}

  ngOnInit() {
    $(document).ready(function(){
      $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    });
  }
 
}
