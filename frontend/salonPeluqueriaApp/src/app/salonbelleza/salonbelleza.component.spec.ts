import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonbellezaComponent } from './salonbelleza.component';

describe('SalonbellezaComponent', () => {
  let component: SalonbellezaComponent;
  let fixture: ComponentFixture<SalonbellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonbellezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalonbellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
