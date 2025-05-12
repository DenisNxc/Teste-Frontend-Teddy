import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectedComponent } from './client-selected.component';

describe('ClientSelectedComponent', () => {
  let component: ClientSelectedComponent;
  let fixture: ComponentFixture<ClientSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
