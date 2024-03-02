import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesLoadingComponent } from './countries-loading.component';

describe('CountriesLoadingComponent', () => {
  let component: CountriesLoadingComponent;
  let fixture: ComponentFixture<CountriesLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
