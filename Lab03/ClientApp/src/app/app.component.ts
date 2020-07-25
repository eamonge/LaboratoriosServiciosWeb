import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

declare const LoaderXML: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'app';
  files: any;
  Load() {
    LoaderXML();
  }

  ngOnInit() {

    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().toString();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

  }
}


