import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidatComponent } from './delete-candidat.component';

describe('DeleteMagasinComponent', () => {
  let component: DeleteCandidatComponent;
  let fixture: ComponentFixture<DeleteCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
