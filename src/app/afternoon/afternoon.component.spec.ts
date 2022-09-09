import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternoonComponent } from './afternoon.component';

describe('AfternoonComponent', () => {
  let component: AfternoonComponent;
  let fixture: ComponentFixture<AfternoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfternoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
