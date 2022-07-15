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
import { ServicesComponent } from './components/services/services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { MapComponent } from './components/map/map.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { VideoComponent } from './components/video/video.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    BannerVationComponent,
    SloganComponent,
    ServicesComponent,
    ServiceCardComponent,
    MapComponent,
    IndustriesComponent,
    VideoComponent,
    FooterComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class UserModule { }
