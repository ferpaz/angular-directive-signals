import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // otra forma de injeccion de dependencias usando inject()
  private fb = inject(FormBuilder);

  public color:string = 'red';

  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ]],
  });

  changeColor(): void {
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
