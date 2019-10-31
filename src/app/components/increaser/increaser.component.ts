import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {
  // @Input() to get value from out
  // To get a diferent variable name it can be like @Input(papapa) leyend: string....
  //  and in the progress component it should be passed with papapa= or [papapa]=
  //  in this component it still being used as leyend
  @Input() leyend: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyend);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyend);
    // console.log('Progreso', this.progreso);
  }

  onChanges( newValue: number ) {
    this.cambioValor.emit( this.progreso );
    console.log( newValue);
  }

  changeValue( val: number ) {
    if ( this.progreso >= 100 && val > 0) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && val < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + val;
    this.cambioValor.emit( this.progreso );
  }
}
