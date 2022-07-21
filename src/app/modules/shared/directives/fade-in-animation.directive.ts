import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { CoreAnimationDirective } from './core-animation.directive';
import { gsap } from 'gsap';

@Directive({
  selector: '[fadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  @Input() fromX = 0;
  @Input() toX = 0;
  @Input() fromY = 0;
  @Input() toY = 0;

  constructor(protected override element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    this.animateIn();
  }

  protected override animateIn() {
    var anime = gsap.timeline();
    anime.fromTo(this.element.nativeElement, {opacity: 0, x:this.fromX,y:this.fromY}, {opacity: 1, duration: this.duration, x:this.toX, y:this.toY});
    super.animateIn();
  }
}
