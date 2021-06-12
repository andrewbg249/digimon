import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../../services/digimon.service';

@Component({
  selector: 'app-list-digimon',
  templateUrl: './list-digimon.component.html',
  styleUrls: ['./list-digimon.component.css']
})
export class ListDigimonComponent implements OnInit {

  listDigimons = [];
  loading = false;
  digimonsPorPagina = 9;
  paginaActual = 1;
  itemInicio = 0;
  itemFinal = this.digimonsPorPagina;
  paginas = [];
  calcularTotalPaginas = 0;

  constructor(private _digimonService: DigimonService) { }

  ngOnInit(): void {
    this.getDigimons();
  }

  getDigimons() {
    this._digimonService.getDigimons().subscribe(data => {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.listDigimons = data;
        this.calcularTotalPaginas = Math.ceil(this.listDigimons.length / this.digimonsPorPagina);
        this.listDigimons = this.listDigimons.slice(this.itemInicio, this.itemFinal);
      }, 2000)
    })
  }

  aumentarPagina() {
    this.paginaActual++
    this.itemFinal += this.digimonsPorPagina
    this.itemInicio += this.digimonsPorPagina
    this._digimonService.getDigimons().subscribe(data => {
      this.listDigimons = []
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.listDigimons = data;
        this.listDigimons = this.listDigimons.slice(this.itemInicio, this.itemFinal);
      }, 2000)
    })
  }

  disminuirPagina() {
    this.paginaActual--
    this.itemFinal -= this.digimonsPorPagina
    this.itemInicio -= this.digimonsPorPagina
    this._digimonService.getDigimons().subscribe(data => {
      this.listDigimons = []
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.listDigimons = data;
        this.listDigimons = this.listDigimons.slice(this.itemInicio, this.itemFinal);
      }, 2000)
    })
  }

  disminuirPaginaClass() {

    if (this.paginaActual === 1) {
      return false;
    } else {
      return true;
    }
  }

  aumentarPaginaClass() {
    if (this.paginaActual === this.calcularTotalPaginas) {
      return false;
    } else {
      return true;
    }
  }
}
