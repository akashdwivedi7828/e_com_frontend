import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {
  num: number;
  constructor(private route:ActivatedRoute){
    
    this.num = isNaN(this.route.snapshot.params["num"]) ? 0 : parseInt(this.route.snapshot.params["num"])

  }
   users = [
    new User(100,"akash"),
    new User(200,"adarsh")
  ]
}

export class User{
  id:number;
  name: string
  
  constructor(id:number, name: string) {
    this.id = id;
    this.name = name;
   
  }
}
