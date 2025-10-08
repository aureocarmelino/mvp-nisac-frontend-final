import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlManagerService
{
  // 👀 Visibilidade reativa por campo
  private fieldVisibility: { [key: string]: BehaviorSubject<boolean> } = {};


  disableAndReset(form: FormGroup, controlNames: string[], resetValue: any = null)
  {
    controlNames.forEach(name =>
    {
        const ctrl = form.get(name);

        if (ctrl)
        {
            ctrl.disable();
            ctrl.reset(resetValue);
        }

    });
  }


  enableControls(form: FormGroup, controlNames: string[])
  {
    controlNames.forEach(name => form.get(name)?.enable());
  }


  disableControls(form: FormGroup, controlNames: string[])
  {
    controlNames.forEach(name => form.get(name)?.disable());
  }



  setControlsValue(form: FormGroup, controlValues: { [key: string]: any }, emitEvent = true)
  {

    Object.entries(controlValues).forEach(([key, value]) =>
    {
        form.get(key)?.setValue(value, { emitEvent });
    });

  }


  setValidators(form: FormGroup, controlName: string, validators: ValidatorFn[] = [])
  {
    const control = form.get(controlName);

    if (control)
    {
      control.setValidators(validators);
      control.updateValueAndValidity();
    }

  }


  clearValidators(form: FormGroup, controlName: string)
  {
    const control = form.get(controlName);

    if (control)
    {
        control.clearValidators();
        control.updateValueAndValidity();
    }
  }



  getErrorMessages(form: FormGroup, controlName: string, customMessages: { [key: string]: string })
  {
    const control = form.get(controlName);

    if (control && control.errors)
    {
        const firstErrorKey = Object.keys(control.errors)[0];
        return customMessages[firstErrorKey] || 'Campo inválido';
    }

    return null;
  }



  resetWithDefaults(form: FormGroup, defaults: { [key: string]: any })
  {

    Object.entries(defaults).forEach(([key, value]) =>
    {
        const ctrl = form.get(key);

        if (ctrl)
        {
            ctrl.reset(value);
        }
    });
  }


  // 👀 VISIBILIDADE REATIVA - Define visibilidade de um campo
  setFieldVisibility(fieldName: string, visible: boolean)
  {
    if (!this.fieldVisibility[fieldName])
    {
        this.fieldVisibility[fieldName] = new BehaviorSubject<boolean>(visible);
    }
    else
    {
        this.fieldVisibility[fieldName].next(visible);
    }
  }


  // 👀 VISIBILIDADE REATIVA - Observar se campo está visível
  isFieldVisible(fieldName: string): Observable<boolean>
  {
    if (!this.fieldVisibility[fieldName])
    {
        this.fieldVisibility[fieldName] = new BehaviorSubject<boolean>(true); // padrão: visível
    }

    return this.fieldVisibility[fieldName].asObservable();
  }


  // 👀 VISIBILIDADE REATIVA - Ver estado atual sem se inscrever
  isFieldVisibleSync(fieldName: string): boolean
  {
    return this.fieldVisibility[fieldName]?.value ?? true;
  }

}
