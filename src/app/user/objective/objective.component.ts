import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent implements OnInit {
  name ='Pranav Shukla';
  designition='Senior System Engineer   ~ Infosys Ltd. Pune, Maharashtra'
  objective='Innovative task-driven professional with 2 years of experience in developing solutions as per company’s requirements along with working on my personal projects to keep myself updated with new trends and polish my skills. Proficient in  developing user interfaces,creating datbase schema and stored procedures, writing and testing codes, troubleshooting simple/complex issues and implementing new features based on user\'s feedback.'
  contact='8889237663';
  email='pranavshukla131@gmail.com'
  linkedin='https://www.linkedin.com/in/pranav-shukla-pr/'

  constructor() { }

  ngOnInit() {
  }

}
