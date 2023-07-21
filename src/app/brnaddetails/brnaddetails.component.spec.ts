import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnaddetailsComponent } from './brnaddetails.component';

describe('BrnaddetailsComponent', () => {
  let component: BrnaddetailsComponent;
  let fixture: ComponentFixture<BrnaddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrnaddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrnaddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
