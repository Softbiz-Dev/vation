import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ParticlesConfig } from '../../particles-config';

SwiperCore.use([Autoplay, Pagination, Navigation]);

declare let particlesJS: any;
@Component({
  selector: 'app-banner-vation',
  templateUrl: './banner-vation.component.html',
  styleUrls: ['./banner-vation.component.scss']
})
export class BannerVationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.invokeParticles()
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

}
