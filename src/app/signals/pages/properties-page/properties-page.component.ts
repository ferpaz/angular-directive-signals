import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/single-user-response.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public user = signal<User | null>({
		id: '10',
		email: "byron.fields@reqres.in",
		first_name: "Byron",
		last_name: "Fields",
		avatar: "https://reqres.in/img/faces/10-image.jpg"
	});

  public fullName = computed(() => {
    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });

  public counter = signal(10);

  public userChangedEffect = effect(() => {
      console.log('User changed:', this.user());
      console.log('counter:', this.counter());
    }
  );


  onFieldUpdated(field:keyof User, value:string | undefined) {
    // Update the user signal
    // this.user.set({
    //   ...this.user(),
    //     [field]: value
    //   });

    // this.user.update(
    //   user => ({
    //     ...user,
    //     [field]: value
    //   })
    // );

    this.user.update(user => {
      switch (field) {
        case 'id':
          return {
            ...user,
            id: value
          };
          break;
        case 'email':
          return {
            ...user,
            email: value
          };
          break;
        case 'first_name':
          return {
            ...user,
            first_name: value
          };
          break;
        case 'last_name':
          return {
            ...user,
            last_name: value
          };
          break;
        case 'avatar':
          return {
            ...user,
            avatar: value
          };
          break;
      }
    });
  }

  increaseBy(value:number) {
    this.counter.update((counter) => counter + value);
  }
}
