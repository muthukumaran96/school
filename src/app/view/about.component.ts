import{Component} from '@angular/core'
import * as AOS from 'aos';  
@Component({

     templateUrl:'./about.component.html',
     selector:'app-about',
     styleUrls:['./main.css']


})

export class AboutComponent
{
     ngOnInit() {
          AOS.init({
          duration: 400,
          }) 
          AOS.refresh();  
          
        }
}
