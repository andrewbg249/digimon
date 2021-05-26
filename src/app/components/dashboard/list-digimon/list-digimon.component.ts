import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../../services/digimon.service';

@Component({
  selector: 'app-list-digimon',
  templateUrl: './list-digimon.component.html',
  styleUrls: ['./list-digimon.component.css']
})
export class ListDigimonComponent implements OnInit {

  listDigimons = [];
  loading = true;

  constructor(private _digimonService: DigimonService) { }

  ngOnInit(): void {
    this.getDigimons();
  }

  getDigimons() {
    this._digimonService.getDigimons().subscribe(data => {
      this.listDigimons = data;
      this.loading = false;
      console.log(this.listDigimons);
    })
  }

}
