import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;

  private _errors: ValidationErrors | null | undefined = null;

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessages();
  }

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setErrorMessages();
  }

  setErrorMessages(): void {
    if (!this.htmlElement) return;

    if (this._errors === null || this._errors === undefined) {
      this.htmlElement!.nativeElement.innerHTML = '';
      this.htmlElement!.nativeElement.style.color = 'green';
      return;
    }

    const errorTypes = Object.keys(this._errors);

    if (errorTypes.length === 0) {
      this.htmlElement!.nativeElement.innerHTML = '';
      this.htmlElement!.nativeElement.style.color = 'green';
      return;
    }

    this.htmlElement!.nativeElement.style.color = 'red';

    if (errorTypes.includes('required')) {
      this.htmlElement!.nativeElement.innerHTML = "Este campo es requerido";
      return;
    }

    if (errorTypes.includes('minlength')) {
      const requiredLength = this._errors['minlength']['requiredLength'];
      this.htmlElement!.nativeElement.innerHTML = `Este campo debe tener al menos ${requiredLength} caracteres`;
      return;
    }

    if (errorTypes.includes('email')) {
      this.htmlElement!.nativeElement.innerHTML = "El email no es válido";
      return;
    }

    this.htmlElement!.nativeElement.innerHTML = "Existen errores de validación";
  }
}
