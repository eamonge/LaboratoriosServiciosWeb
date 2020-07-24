import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

declare const LoaderXML: any;

//import { } from '@angu'

//function hello() {
//  alert('Hello!!!');
//}

//declare files: any;

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
  //myFunction(xml) {
  //  var i;
  //  var xmlDoc = xml.responseXML;
  //  var table = "<tr><th>Artist</th><th>Title</th></tr>";
  //  var x = xmlDoc.getElementsByTagName("CD");
  //  for (i = 0; i < x.length; i++) {
  //    table += "<tr><td>" +
  //      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  //      "</td><td>" +
  //      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  //      "</td></tr>";
  //  }
  //  document.getElementById("demo").innerHTML = table;
  //}

  //loadXMLDoc() {
  //  var xmlhttp = new XMLHttpRequest();
  //  xmlhttp.onreadystatechange = function () {
  //    if (this.readyState == 4 && this.status == 200) {
  //      myFunction(this);
  //    }
  //  };
  //  xmlhttp.open("GET", "cd_catalog.xml", true);
  //  xmlhttp.send();
  //}

  

  ngOnInit() {


    //
    $(".custom-file-input").on("change", function () {
      var fileName = $(this).val().toString();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
    //this.loadXMLDoc();
    //



    //var fileInput = document.getElementById('customFile');
    //var xmlFileInfo = document.getElementById('ShowFile');
    //var files: any;

    //fileInput.addEventListener('change', function (e) {
    //  var file = fileInput.files[0];
    //  var textType = /text.*/;

    //  if (file.type.match(textType)) {
    //    var reader = new FileReader();

    //    reader.onload = function (e) {
    //      xmlFileInfo.innerText = reader.result;
    //    }

    //    reader.readAsText(file);
    //  } else {
    //    xmlFileInfo.innerText = "File not supported!"
    //  }
    //});


  }
}


