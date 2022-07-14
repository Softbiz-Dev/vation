import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { BannerVationComponent } from './components/banner-vation/banner-vation.component';
import { SloganComponent } from './components/slogan/slogan.component';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    BannerVationComponent,
    SloganComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class UserModule { }
