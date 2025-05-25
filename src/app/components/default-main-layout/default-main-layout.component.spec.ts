import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMainLayoutComponent } from './default-main-layout.component';

describe('DefaultMainLayoutComponent', () => {
  let component: DefaultMainLayoutComponent;
  let fixture: ComponentFixture<DefaultMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultMainLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
