import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByPriceDescComponent } from './books-by-price-desc.component';

describe('BooksByPriceDescComponent', () => {
  let component: BooksByPriceDescComponent;
  let fixture: ComponentFixture<BooksByPriceDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByPriceDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByPriceDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
