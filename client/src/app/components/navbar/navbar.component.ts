import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private unsplashservice: UnsplashService) { }

  ngOnInit(): void {
  }
  getValue(event : any){
    const value = event.target.value;
    this.unsplashservice.getData(value);
    event.target.value = '';
  }
 
}
