import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinofoormComponent } from './vinofoorm.component';

describe('VinofoormComponent', () => {
  let component: VinofoormComponent;
  let fixture: ComponentFixture<VinofoormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinofoormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinofoormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
