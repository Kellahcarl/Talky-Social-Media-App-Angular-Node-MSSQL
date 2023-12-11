import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedPostType: string = 'text'; 

  onSubmit() {
    // Implement your submit logic based on the selected post type
    console.log('Submitting post of type:', this.selectedPostType);
  }
}
