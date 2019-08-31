import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisolAppComponent } from './disol-app.component';

describe('DisolAppComponent', () => {
  let component: DisolAppComponent;
  let fixture: ComponentFixture<DisolAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisolAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisolAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
