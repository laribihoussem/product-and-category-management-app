import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpdateCategoryComponent } from './get-update-category.component';

describe('GetUpdateCategoryComponent', () => {
  let component: GetUpdateCategoryComponent;
  let fixture: ComponentFixture<GetUpdateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUpdateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUpdateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
