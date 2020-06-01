import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByPriceAscComponent } from './books-by-price-asc.component';

describe('BooksByPriceAscComponent', () => {
  let component: BooksByPriceAscComponent;
  let fixture: ComponentFixture<BooksByPriceAscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByPriceAscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByPriceAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
