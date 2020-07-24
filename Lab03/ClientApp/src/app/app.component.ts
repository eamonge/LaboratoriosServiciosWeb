import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

declare const myFun: any;

//import { } from '@angu'

//function hello() {
//  alert('Hello!!!');
//}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'app';

  myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i < x.length; i++) {
      table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }

  loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
  }

  

  ngOnInit() {
    //
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().toString();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
    this.loadXMLDoc();
    //
  //  $(document).ready(function () {
  //    $('#customFile').on('change', function (evt) {
  //      var txt = document.getElementById('ShowFile');
  //    var f = evt.target.files[0];
  //    if (f) {
  //      var r = new FileReader();
  //      r.onload = function (e) {
  //        console.log(e.target.result);
  //        txt.textContent = e.target.result;
  //      };
  //      r.readAsText(f);
  //      console.log('FUCKING SHIT');
  //    } else {
  //      console.log("failed");
  //    }
  //  });
  //});


  }
}


