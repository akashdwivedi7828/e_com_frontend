import { Component } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent {

  todos=[
    new Todo(1,"Learn To Dance",new Date()),
    new Todo(2,"Learn To Swim",new Date()),
    new Todo(3,"Learn To Draw",new Date()),
    new Todo(2,"Learn Angular",new Date()),
   ]
}
export class Todo{
  id:number;
  description:string;
  targetDate:Date;

  constructor(id:number,description:string,targetDate:Date){
    this.id=id;
    this.description=description;
    this.targetDate=targetDate;
  }
  /*
  or
  constructor(public id:number,public description:string,public targetDate:Date){}
  */

}