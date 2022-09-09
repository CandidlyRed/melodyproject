import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnightComponent } from './midnight.component';

describe('MidnightComponent', () => {
  let component: MidnightComponent;
  let fixture: ComponentFixture<MidnightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidnightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
