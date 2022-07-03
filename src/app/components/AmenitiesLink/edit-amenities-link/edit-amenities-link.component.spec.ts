import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAmenitiesLinkComponent } from './edit-amenities-link.component';

describe('EditAmenitiesLinkComponent', () => {
  let component: EditAmenitiesLinkComponent;
  let fixture: ComponentFixture<EditAmenitiesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAmenitiesLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAmenitiesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
