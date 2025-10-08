import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtilizadorComponent } from './detail-utilizador.component';

describe('DetailUtilizadorComponent', () => {
  let component: DetailUtilizadorComponent;
  let fixture: ComponentFixture<DetailUtilizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailUtilizadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUtilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
