
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  @Component({
    templateUrl:'./admin.component.html',
    selector:'app-admin',
    styleUrls:['./main.css'] 
  })
  export class AdminComponent implements OnInit {  
 
    //newly added
    isSubmitted = false;

    //newly added
    City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
    Category: any =['Our Facilities', 'Our Staff', 'Events', 'Activities', 'Tour']

    constructor(private formBuilder: FormBuilder) { }

    //newly added
    registrationForm = this.formBuilder.group({
        cityName: ['', [Validators.required]] 
      })

      //Newly added
      changeCity(e) {
        console.log(e.value)
        this.cityName.setValue(e.target.value, {
          onlySelf: true
        })
      }

      
    
      // Getter method to access formcontrols Newly added
      get cityName() {
        return this.registrationForm.get('cityName');
      }
    
      /*########### Template Driven Form ########### Newly added */
      onSubmit() {
      /*  this.isSubmitted = true;
        if (!this.registrationForm.valid) {
          return false;
        } else {
          alert(JSON.stringify(this.registrationForm.value))
        } */
    
      }
    
     

    
    registerForm: FormGroup;
    ngOnInit() {
      this.registerForm = this.formBuilder.group({ 
        employerGroup: this.formBuilder.group({
            title: ['', Validators.required], 
            date: ['', Validators.required],
            subtitle: ['', Validators.required],
            file: ['', Validators.required],
            content: ['', Validators.required]                    
        }),
        candidateGroup: this.formBuilder.group({
          category: ['', Validators.required]   
        })
      });
    }
    employerSubmitted: boolean = false;
    candidateSubmitted: boolean = false;

    get CategoryName() {
        return this.registrationForm.get('Category');
      }
     

    changeCategory(e){
        console.log(e.value)
        this.Category.setValue(e.target.value, {
          onlySelf: true
        })
      }



    // Employer  Login Method newly added
    get fe() { return (<FormGroup>this.registerForm.get('employerGroup')).controls; }
  
    get fc() { return (<FormGroup>this.registerForm.get('candidateGroup')).controls; }
  
    get employerGroup() {
      return this.registerForm.get('employerGroup');
    }
  
    get candidateGroup() {
      return this.registerForm.get('candidateGroup');
    }
  
    employerLogin() {
      this.employerSubmitted = true;
      if (this.registerForm.invalid) {
        return;
      }
    }
    // Seeker  Login Method
    seekerLogin() {
      this.candidateSubmitted = true; 
      if (this.registerForm.invalid) {
        return;
      }
    }
  
  } 
 
  