import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealhesProdutoComponent } from './dealhes-produto.component';

describe('DealhesProdutoComponent', () => {
  let component: DealhesProdutoComponent;
  let fixture: ComponentFixture<DealhesProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealhesProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealhesProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
