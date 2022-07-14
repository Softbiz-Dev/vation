import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    var img = document.getElementById('img');
    var coords = document.getElementById('coords');
    img!!.addEventListener('mousemove', function (event) {

      coords!!.innerHTML = "x: " + event.offsetX + "<br/>y: " + event.offsetY;
    });

  }

}
