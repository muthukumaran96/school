import{Component} from '@angular/core'
import * as AOS from 'aos';  

@Component({

     templateUrl:'./blog.component.html',
     selector:'app-blog',
     styleUrls:['./main.css']


})

export class BlogComponent
{
     ngOnInit() {
          AOS.init({
          duration: 400,
          }) 
          AOS.refresh();  
          
        } 
}