import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';







@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./main.css']
 
 
 })
 
 export class LoginComponent implements OnInit
{    

    username:string;
    password:string
    constructor( private router: Router) { } 

    ngOnInit(){
    }

    LoginUser()
    {
        if(this.username == "admin" && this.password == "chiseladmin@2020")
        {
            
            this.router.navigate(['/admin']); 
           
        }
        else{
             
            alert('Username & Password Mismatch');
        }
    }
}

