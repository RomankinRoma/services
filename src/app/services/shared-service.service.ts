import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {LoggingService} from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  users = [ new User(1,'Mark', 22),
            new User(2,'Ruffalo', 21),
            new User(3,'Tony', 23),
            new User(4,'Stark', 24)];
  constructor(private logService:LoggingService) { }

  getUsers(){
    this.logService.consoleLog("Users\n"+this.users.toString());
    return this.users;
  }
  deleteUser(user:User){
    this.users.splice(this.users.indexOf(user), 1);
    this.logService.consoleLog(user.name+"  deleted!")
  }

  addUser(id:number,n:string,age:number){
    this.users.push(new User(id,n,age));
    this.logService.consoleLog(n+" added to base!")
  }
}
