import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  consoleLog(message:String){
    console.log(message);
  }
}
