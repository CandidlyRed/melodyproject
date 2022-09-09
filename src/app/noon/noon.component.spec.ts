import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoonComponent } from './noon.component';

describe('NoonComponent', () => {
  let component: NoonComponent;
  let fixture: ComponentFixture<NoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
