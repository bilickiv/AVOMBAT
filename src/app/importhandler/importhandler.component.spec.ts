import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporthandlerComponent } from './importhandler.component';

describe('ImporthandlerComponent', () => {
  let component: ImporthandlerComponent;
  let fixture: ComponentFixture<ImporthandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImporthandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporthandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
