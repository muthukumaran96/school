import {Component} from '@angular/core'
import * as AOS from 'aos';  

@Component({ 
 
   templateUrl:'./ourteam.component.html',
   selector:'app-ourteam',
   styleUrls:['./main.css']

}) 

export class OurteamComponent
{
   ngOnInit() {
      AOS.init({
      duration: 400,
      }) 
      AOS.refresh();  
      
    }  
}
