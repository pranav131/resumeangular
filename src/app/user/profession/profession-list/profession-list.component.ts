import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.scss']
})
export class ProfessionListComponent implements OnInit {
  dataSource = new MatTableDataSource<Profession>(dataelement);
  displayedColumns :string[] =['xyz']
  constructor() { }
  
  ngOnInit() {
    //console.log(this.dataSource);
  }
  showgit(git:string){
    return (git==''?true:false);
  }

}
export interface Profession{
projectname:string;
techstack:string;
description:string;
responsibility:string[];
git:string;
}
const dataelement: Profession[]=[
  {projectname:'Molina Claims Gateway ~ Infosys Ltd., Pune, Maharashtra (Remote)',techstack:'C# .NET, SQL Server 2019, .Net Framework 4.8, ASP.Net Web API, MVC, GIT',description:'Molina Claims Gateway is an application where 837 claim files from 20+ states are sent by vendors, processed and validated through windows services and loaded to QNXT. An online portal of the same (MCG360) is used by providers to login and submit claims and follow the same validation process.',responsibility:['Enhance operational and development processes by adding new methods, removing redundant code, doing bug fixes as per client\'s requirements','Performing RCA in case of issues and implement better business solutions to avoid recurrence of issues','Worked on user/business raised incident or request tickets by analyzing the root cause of an issue, preparing and sending the analysis report to business.'],git:''},
  {projectname:'TravelAway',techstack:'C# .NET, SQL Server 2019, .Net Framework 4.8, ASP.Net Web API, MVC, GIT',description:'This web application allows its user’s to book a travelling package across India, and bookaccommodation for the same. It has both admin and customer login and feature based on the authorization.',responsibility:['Preparing the Database schemas and stored procedures for the application.',' Creating the views with AngularJS and Business Logic with the help of .Net Core and Entity Framework Core.','Preparing test cases for unit testing and debugging'],git:'https://github.com/pranav131/TravelAway'},
  {projectname:'Rental Treasure | Mentor: Dr. Manish Shrivastava',techstack:'Java EE - Servlets & JSPs, HTML, JavaScript, CSS, Oracle, Apache Tomcat Web server',description:'We have developed a web application using which a person can share any resources on a rental basis. It is an interface that can help the client/customer and the supplier to interact with each other. In this web app, they can communicate with each other and can share resources. Proper terms and conditions will be mentioned and should be agreed upon before sharing any resource.',responsibility:['Requirements gathering and preparing the system design.','Creating the models, views, and controllers using JEE servlets and JSPs and integrating it with the front end and database.','Performing unit testing and integration testing and debugging.'],git:'https://github.com/pranav131/rentaltreasure'}
  
]