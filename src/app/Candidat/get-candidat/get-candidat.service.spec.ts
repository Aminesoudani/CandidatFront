import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCandidatComponent } from './get-candidat.component';

describe('AddCandidatComponent', () => {
  let component: GetCandidatComponent;
  let fixture: ComponentFixture<GetCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
