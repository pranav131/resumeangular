import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() { }
  // @Input() mydata: any;
 name="who is she" ;
 aboutme="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. " ;
 education=[
   {title:'UG Course',institute:'LNCT',marks:'9.3cgpa'},
   {title:'Higher secondary',institute:'MHMS',marks:'84%'},
   {title:'High school',institute:'RLPS',marks:'83%'}
 ]
 professional=[
   {title:'Intern',company:'Netlink',year:'2018',iscurrentlyworking:'No',description:'worked on a marketing based project'}
 ]
  ngOnInit() {
  }

}
