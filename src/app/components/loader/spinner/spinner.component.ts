import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-spinner',
  imports: [NgxSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpinnerComponent {

}
