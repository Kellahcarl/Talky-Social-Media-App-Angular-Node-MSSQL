import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinibarComponent } from './minibar.component';

describe('MinibarComponent', () => {
  let component: MinibarComponent;
  let fixture: ComponentFixture<MinibarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinibarComponent]
    });
    fixture = TestBed.createComponent(MinibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
