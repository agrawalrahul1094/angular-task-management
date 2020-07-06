import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHostComponent } from './card-host.component';

describe('CardHostComponent', () => {
  let component: CardHostComponent;
  let fixture: ComponentFixture<CardHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
