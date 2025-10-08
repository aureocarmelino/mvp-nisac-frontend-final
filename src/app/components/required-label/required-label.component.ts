import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-required-label',
  imports: [NgIf],
  templateUrl: './required-label.component.html',
  styleUrl: './required-label.component.scss'
})
export class RequiredLabelComponent
{
    @Input() label!: string;
    @Input() forId!: string;
    @Input() set required(value: string | boolean)
    {
        this._required = value === '' || value === true || value === 'true';
    }
    _required = false;
}
