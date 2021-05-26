import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-digimon',
  templateUrl: './card-digimon.component.html',
  styleUrls: ['./card-digimon.component.css']
})
export class CardDigimonComponent implements OnInit {

  @Input() digimon: any;
  imgUrl: string;
  name: string;
  level: string;

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.digimon.img;
    this.name = this.digimon.name;
    this.level = this.digimon.level;
  }

}
