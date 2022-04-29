/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantasListaComponent } from './plantas-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('PlantasListaComponent', () => {
  let component: PlantasListaComponent;
  let fixture: ComponentFixture<PlantasListaComponent>;
  let debug: DebugElement;

  let createPlantas = (quantity: number): Planta[] => {
    let storage = [];
    for (let i = 0; i < quantity; i++) {
      storage.push(
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    }

    return storage;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantasListaComponent],
      providers: [PlantaService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListaComponent);
    component = fixture.componentInstance;

    component.plantas = createPlantas(3);

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table header', () => {
    let listaElement: HTMLElement = fixture.nativeElement;
    const encabezado = listaElement.querySelectorAll('thead tr')!;
    expect(encabezado.length).toEqual(1);
  });

  it('should have three rows in its table body', () => {
    let listaElement: HTMLElement = fixture.nativeElement;
    const registros = listaElement.querySelectorAll('tbody tr')!;
    expect(registros.length).toEqual(3);
  });
});
