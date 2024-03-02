import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsLoadingComponent } from './country-details-loading.component';

describe('CountryDetailsLoadingComponent', () => {
  let component: CountryDetailsLoadingComponent;
  let fixture: ComponentFixture<CountryDetailsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDetailsLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDetailsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
