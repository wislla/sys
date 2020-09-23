import { Injectable } from '@angular/core';
import { Position } from '../classes/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private position : Position []; 


  constructor() {
    this.position = [];

    for (let i = 0; i<10; i++){
     
      let p = new Position();
      p.id=i;
      p.name='name'+i;
      p.description='desc'+i;
      p.salary=1000+i;
      p.cbo1994='cbo'+i;
      p.cbo2002='cbo0'+i;
      this.position.push(p);
    }
    
   }

   getPosition(){
   
     return this.position;
   }
}
