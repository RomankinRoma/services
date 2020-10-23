import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input()
  user:User;
  @Input()
  deleteUser:Function;
  constructor() { }

  ngOnInit(): void {
  }



}
