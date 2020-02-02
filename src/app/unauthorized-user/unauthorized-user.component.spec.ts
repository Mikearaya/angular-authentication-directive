import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedUserComponent } from './unauthorized-user.component';

describe('UnauthorizedUserComponent', () => {
  let component: UnauthorizedUserComponent;
  let fixture: ComponentFixture<UnauthorizedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
