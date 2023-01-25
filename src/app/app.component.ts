import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {

  }
  posts: any;
  isloading = false;
  val = "hell";

  abcd = "In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also be used as stubs or pad to avoid software testing issues by ensuring that all variables and data fields are occupied. In operational use, dummy data may be transmitted for OPSEC purposes. Dummy data must be rigorously evaluated and documented to ensure that it does not cause unintended effects."
  marks = 6;
  getdata() {
    this.isloading = true;
    this.http.get('http://ghibliapi.herokuapp.com/films').subscribe(res => {
      this.posts = res;
      console.log(res);
      this.isloading = false;
    }, error => {
      console.log(error, "error in request");
    })
  }

  title = 'result';
  a = 'pranav';
}
