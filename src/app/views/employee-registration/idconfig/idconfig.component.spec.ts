import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdconfigComponent } from './idconfig.component';

describe('IdconfigComponent', () => {
  let component: IdconfigComponent;
  let fixture: ComponentFixture<IdconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
