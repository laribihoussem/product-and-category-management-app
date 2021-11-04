import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUpdateProductComponent } from './get-update-product.component';

describe('GetUpdateProductComponent', () => {
  let component: GetUpdateProductComponent;
  let fixture: ComponentFixture<GetUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
