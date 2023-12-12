import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedPostType: string = 'text';
  selectedFile: Observable<string | ArrayBuffer | null> | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.readFile(file);
  }

  onFileDropped(event: any): void {
    const files: FileList = event.files;
    const file = files[0];
    this.readFile(file);
  }

  private readFile(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.selectedFile = of(reader.result);
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    // Implement your submit logic based on the selected post type
    console.log('Submitting post of type:', this.selectedPostType);
  }
}
