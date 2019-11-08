import{Component} from '@angular/core'
import * as AOS from 'aos';  

@Component({

     templateUrl:'./admission.component.html',
     selector:'app-admission',
     styleUrls:['./main.css']

 
})

export class AdmissionComponent
{
     ngOnInit() {
          AOS.init({
          duration: 400,
          }) 
          AOS.refresh();  
          
        } 
}