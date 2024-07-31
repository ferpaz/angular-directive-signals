import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  // signal with initial value
  public counter = signal(10);

  // readonly signal
  public squareCounter = computed(() => this.counter() ** 2);

  public increment( value: number) {
    this.counter.update( current => current + value);
  }

  public decrement( value: number) {
    this.counter.update( current => current - value);
  }

  public reset() {
    this.counter.set(0);
  }
}
