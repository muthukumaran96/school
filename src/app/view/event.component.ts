import {Component} from '@angular/core'
import * as AOS from 'aos';   

@Component({

  templateUrl:'./event.component.html',
  selector:'app-event',
  styleUrls:['./main.css']


})
export class EventComponent
{
  ngOnInit() {
    AOS.init({
    duration: 400,
    }) 
    AOS.refresh();   
    
  }  
}
