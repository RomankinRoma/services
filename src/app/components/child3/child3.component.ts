import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared-service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  user=new User(null,null,null);

  constructor(private userService: SharedService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.addUser(this.user.name,this.user.age,this.user.id);
  }

}
