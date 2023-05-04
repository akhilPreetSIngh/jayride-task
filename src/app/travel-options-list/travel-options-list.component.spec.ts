import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOptionsListComponent } from './travel-options-list.component';

describe('TravelOptionsListComponent', () => {
  let component: TravelOptionsListComponent;
  let fixture: ComponentFixture<TravelOptionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelOptionsListComponent]
    });
    fixture = TestBed.createComponent(TravelOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
