import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryholderComponent } from './queryholder.component';

describe('QueryholderComponent', () => {
  let component: QueryholderComponent;
  let fixture: ComponentFixture<QueryholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
