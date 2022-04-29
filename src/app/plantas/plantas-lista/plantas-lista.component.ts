import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-plantas-lista',
  templateUrl: './plantas-lista.component.html',
  styleUrls: ['./plantas-lista.component.css'],
})
export class PlantasListaComponent implements OnInit {
  plantas: Planta[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.totalExterior = this.plantas.filter(
        (planta) => planta.tipo === 'Exterior'
      ).length;
    });

    this.totalInterior = this.plantas.filter(
      (planta) => planta.tipo === 'Interior'
    ).length;
  }
}
