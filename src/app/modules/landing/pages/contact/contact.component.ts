import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  form: FormGroup;
  state: any[];
  phoneOperator: any[];
  typeInfo: any[];
  categories: any[];
  checked: boolean = false;

  constructor() {

    this.state = [
      {
        name: 'Amazonas',
      },
      {
        name: 'Apure',
      }
    ]

    this.phoneOperator = [
      {
        name: '0412',
      },
      {
        name: '0424',
      }
    ]

    this.typeInfo = [
      {
        name: 'Soporte Técnico',
      },
      {
        name: 'Venta',
      }
    ]

    this.categories = [
      {
        name: 'Correo',
      },
      {
        name: 'Email',
      },
      {
        name: 'WhatsApp',
      },
      {
        name: 'Teléfono',
      }
    ]

    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      operator: new FormControl(this.phoneOperator[0].name, [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      state: new FormControl(this.state[0].name, [Validators.required]),
      typeRequest: new FormControl(this.typeInfo[0].name, [Validators.required]),
      coment: new FormControl("", [Validators.required]),
    });

    this.categories.forEach((c: any) => {
      this.form.addControl(c.name, new FormControl(false, Validators.required))
    });
  }

  ngOnInit(): void {
  }

  onlyNumberKey(event: { charCode: number; }) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
}
