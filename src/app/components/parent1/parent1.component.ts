import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared-service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  users:User[];

  constructor(private userService:SharedService) { }

  ngOnInit(): void {

  }

  getUsers(){
    this.users=this.userService.getUsers();
  }

}
