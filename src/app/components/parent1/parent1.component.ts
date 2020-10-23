import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared-service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  user=new User(null,null,null);
  users:User[];
  deleteUsers:Function;
  setUserForChild:Function;
  constructor(private userService:SharedService) { }

  ngOnInit(): void {
  this.setUserForChild=this.setUser.bind(this);
  this.deleteUsers=this.deleteUser.bind(this);
  }

  getUsers(){
    this.users=this.userService.getUsers();
  }
  deleteUser(user:User){
    this.userService.deleteUser(user);
  }

  setUser(user:User){
    this.user=user;
  }

}
