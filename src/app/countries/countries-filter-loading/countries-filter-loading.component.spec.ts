import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFilterLoadingComponent } from './countries-filter-loading.component';

describe('CountriesFilterLoadingComponent', () => {
  let component: CountriesFilterLoadingComponent;
  let fixture: ComponentFixture<CountriesFilterLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFilterLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesFilterLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
