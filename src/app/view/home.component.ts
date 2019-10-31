import {Component, OnInit, TemplateRef} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as AOS from 'aos';  
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
 
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({

   templateUrl:'./home.component.html',
   selector:'app-home',
   styleUrls:['./main.css'], 
    providers: [
      { provide: CarouselConfig, useValue: { interval: 8000, noPause: true, showIndicators: false } } 
    ],    
 
    animations: [ 
      trigger('bounce', [transition('* => *', useAnimation(bounce))]) 
      
    ] 


})

export class HomeComponent implements OnInit
{
  ngOnInit() {
    AOS.init({
    duration: 400,
    }) 
    AOS.refresh(); 
    
  } 
  bounce: any; 

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
} 

 
