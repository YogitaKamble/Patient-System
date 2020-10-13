import { Component, OnInit } from '@angular/core';
import $ from "jquery";


@Component({

selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }


ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
    $("#wrapper").toggleClass("toggled");

  });

  $(document).ready(function(){
    $('ul li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
  });
  }



}


        