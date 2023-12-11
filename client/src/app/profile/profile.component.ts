import { Component, inject, TemplateRef } from '@angular/core';
import {
  NgbDatepickerModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  private offcanvasService = inject(NgbOffcanvas);
  closeResult = '';

  selectedPostType: string = 'text'; // Default to text post

  // Rest of your component logic...

  onSubmit() {
    // Implement your submit logic based on the selected post type
    console.log('Submitting post of type:', this.selectedPostType);
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'offcanvas-basic-title',
    });
  }
}
