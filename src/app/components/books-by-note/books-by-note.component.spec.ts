import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksByNoteComponent } from './books-by-note.component';

describe('BooksByNoteComponent', () => {
  let component: BooksByNoteComponent;
  let fixture: ComponentFixture<BooksByNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksByNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksByNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
