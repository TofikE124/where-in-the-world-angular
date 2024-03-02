import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaginatorComponent } from './page-paginator.component';

describe('PagePaginatorComponent', () => {
  let component: PagePaginatorComponent;
  let fixture: ComponentFixture<PagePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
