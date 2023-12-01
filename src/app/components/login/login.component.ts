import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupUsers:any[]=[];
  signupObj:any = {
    userName:"",
    email:"",
    password:""
  };
  loginObj:any = {
    userName:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers');
    if(localData!=null){
      this.signupUsers=JSON.parse(localData);

    }
  }
  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:"",
      email:"",
      password:""
    }
    alert("sucessfully")
  }

  onLogin(){
    const isUserexist=this.signupUsers.find(m=>m.userName==this.loginObj.userName && m.password==this.loginObj.password)
    if(isUserexist !=undefined){
      this.router.navigateByUrl('dashboard');
    }else{
      alert('wrong credentials')
    }
  }
}
