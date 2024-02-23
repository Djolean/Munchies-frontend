import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupOrderComponent } from './create-group-order.component';

describe('CreateGroupOrderComponent', () => {
  let component: CreateGroupOrderComponent;
  let fixture: ComponentFixture<CreateGroupOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGroupOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateGroupOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
