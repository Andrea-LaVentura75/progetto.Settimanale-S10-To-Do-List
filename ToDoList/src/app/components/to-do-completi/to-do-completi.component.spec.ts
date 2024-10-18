import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCompletiComponent } from './to-do-completi.component';

describe('ToDoCompletiComponent', () => {
  let component: ToDoCompletiComponent;
  let fixture: ComponentFixture<ToDoCompletiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoCompletiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoCompletiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
