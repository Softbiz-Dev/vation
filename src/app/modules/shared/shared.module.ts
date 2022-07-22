import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// PRIME NG
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {CaptchaModule} from 'primeng/captcha';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    FontAwesomeModule,
    RippleModule,
    ButtonModule,
    CaptchaModule
    
  ],
  exports: [
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    FontAwesomeModule,
    RippleModule,
    ButtonModule,
    CaptchaModule
  ],
  providers: [

  ]

})
export class SharedModule { }
