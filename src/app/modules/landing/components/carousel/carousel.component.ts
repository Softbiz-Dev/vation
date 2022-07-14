import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../../particles-config';


declare let particlesJS: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.invokeParticles();
  }



  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
