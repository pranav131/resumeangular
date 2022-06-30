import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }
 @Input() Professional: any;
  ngOnInit() {
  }

}
