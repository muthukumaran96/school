import {Component} from '@angular/core'
import * as AOS from 'aos';  

@Component({ 
 
   templateUrl:'./class.component.html',
   selector:'app-class',
   styleUrls:['./main.css']

}) 

export class ClassComponent
{
   ngOnInit() {
      AOS.init({
      duration: 400,
      }) 
      AOS.refresh();  
      
    } 
}
