import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskFromComponent } from './create-task-from.component';

describe('CreateTaskFromComponent', () => {
  let component: CreateTaskFromComponent;
  let fixture: ComponentFixture<CreateTaskFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
