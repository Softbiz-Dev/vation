import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerVationComponent } from './banner-vation.component';

describe('BannerVationComponent', () => {
  let component: BannerVationComponent;
  let fixture: ComponentFixture<BannerVationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerVationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerVationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
