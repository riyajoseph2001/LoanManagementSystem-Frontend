import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  error: string = '';

  loginUser?: User = new User();

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


    //Life Cycle Hook
  ngOnInit(): void {

    //create a recative Form
    this.loginForm = this.formBuilder.group({

      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });

  }

  //get controls for validation
  get formControls(){
    return this.loginForm.controls
  }
  //Setting value to isSubmitted
  loginCredentials():void{
    this.isSubmitted=true;
  
  //checking form isvalid
  if(this.loginForm.invalid){
    this.error="Please enter user name and passord";
    return;
  }
  //form is valid
  if(this.loginForm.valid){
    this.error="";
    console.log(this.loginForm.value);
    //checking functionality
    this.authService.loginVerify(this.loginForm.value)
    .subscribe(response =>{
      console.log(response);

      if(response == null){
        this.error = "Invalid user name and password"
      }
    
      //Based on Role ID -Authentication
      if(response.data.role===1){
        console.log("admin");
        localStorage.setItem("USER_NAME",response.data.UserName);
        sessionStorage.setItem("USER_NAME",response.data.UserName);
        localStorage.setItem("ACCESS_ROLE",response.data.role);
        localStorage.setItem("JWT_TOKEN",response.data.ACCESSTOKEN);
        this.router.navigate(['auth/admin'])
      }
      else if(response.data.role===2){
        console.log("manager");
        this.router.navigate(['auth/manager']);
        
      }
      else if(response.data.role===3){
        console.log("HR");
        
      }
      else{
        this.error = "Sorry! Invalid credentials not allowed to syntax"
      }
      
    })
    
  }
}

}
