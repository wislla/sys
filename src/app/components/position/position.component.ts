import { Component, OnInit } from '@angular/core';
import { PositionService } from 'src/app/services/position.service';
import {Position} from '../../classes/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  position: Position[]; 
  selectedPosition1: Position;
  desabititados:boolean = true;

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.position = this.positionService.getPosition();
    console.log(this.position)
  }

  onRowSelect(event) {
    this.desabititados = false;
}

onRowUnselect(event) {
  this.desabititados = true;
}

}
