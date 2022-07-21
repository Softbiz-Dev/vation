import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DottedMap from 'dotted-map';
// Or in the browser: import DottedMap from 'dotted-map';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map:any;

  constructor(private sanitization:DomSanitizer) {

  }

  ngOnInit(): void {

    //this.get()

    /* var img = document.getElementById('img');
    var coords = document.getElementById('coords');
    img!!.addEventListener('mousemove', function (event) {

      coords!!.innerHTML = "x: " + event.offsetX + "<br/>y: " + event.offsetY;
    }); */

  }

  get(){
    const map = new DottedMap({ height: 80, grid: 'diagonal', countries:["VEN"] });

    map.addPin({
      lat: 10.5,
      lng: -66.916664,
      svgOptions: { color: '#fff', radius: 0.4 },
    });
    map.addPin({
      lat: 48.8534,
      lng: 2.3488,
      svgOptions: { color: '#fff', radius: 0.4 },
    });

    const svgMap = map.getSVG({
      radius: 0.22,
      color: '#423B38',
      shape: 'circle',
      backgroundColor: 'transparent',
    });

    //onsole.log(svgMap);


    this.map = this.sanitization.bypassSecurityTrustHtml(svgMap)
  }

}
