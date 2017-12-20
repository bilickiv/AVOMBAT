import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableholderComponent } from './tableholder.component';

describe('TableholderComponent', () => {
  let component: TableholderComponent;
  let fixture: ComponentFixture<TableholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
