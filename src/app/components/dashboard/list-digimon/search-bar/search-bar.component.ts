import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DigimonService } from '../../../../services/digimon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() nombreDigimon = new EventEmitter<string>()

  constructor(private _digimonService: DigimonService) { }

  ngOnInit(): void {
  }

  buscarDigimon(nameDigimon: string) {
    this.nombreDigimon.emit(nameDigimon)
  }
}
