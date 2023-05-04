import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerDetailFormComponent } from './traveller-detail-form.component';

describe('TravellerDetailFormComponent', () => {
  let component: TravellerDetailFormComponent;
  let fixture: ComponentFixture<TravellerDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravellerDetailFormComponent]
    });
    fixture = TestBed.createComponent(TravellerDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
