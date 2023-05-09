import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseInterface } from '../base.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  position = 1;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }
}
