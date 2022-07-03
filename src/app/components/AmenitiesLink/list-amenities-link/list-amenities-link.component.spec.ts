import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmenitiesLinkComponent } from './list-amenities-link.component';

describe('ListAmenitiesLinkComponent', () => {
  let component: ListAmenitiesLinkComponent;
  let fixture: ComponentFixture<ListAmenitiesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAmenitiesLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAmenitiesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
