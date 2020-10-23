import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {SharedService} from '../../services/shared-service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input()
  users:User[];
  constructor(private userService:SharedService) { }

  ngOnInit(): void {
  }

  deleteUser(user:User){
    this.userService.deleteUser(user);
  }

}
