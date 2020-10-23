import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared-service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  addUsers:Function;
  constructor(private userService:SharedService) { }
  user=new User(null,null,null);

  ngOnInit(): void {
    this.addUsers= this.addUser.bind(this);
  }

  addUser(user:User){
    this.userService.addUser(user.id,user.name,user.age);
  }
}
