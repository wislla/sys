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

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.position = this.positionService.getPosition();
    console.log(this.position)
  }

}
