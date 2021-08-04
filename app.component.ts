import { Component } from '@angular/core'
import { animal } from './OOP/animals';
import { tiger } from './OOP/tiger';
import { human } from './poly inherrit oop/human';
import { students } from './poly inherrit oop/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OOPs';
  
public sufyan:animal=new animal (4,"brown")
public awais:tiger=new tiger (4,"brown","blackandorange")
public numan:human=new human (2 ,2)
public waqas:students=new students (2 , 2, "white","english")
Getanimaldetails(){
  return this.sufyan.Getanimaldetails();
}
gettigerdetails(){
  return this.awais.Gettigerdetails();
}
gethumandetails(){
  return this.numan.gethumandetails()
}
getStudentdetails(){
  return this.waqas.getStudentdetails();
}

}

