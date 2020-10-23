import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared-service.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  @Input()
  user:User;
  @Input()
  addUser:Function;
  constructor() { }

  ngOnInit(): void {
  }



}
