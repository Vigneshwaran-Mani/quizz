import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class RegisterPage implements OnInit {

  fname: any;
  lname: any;
  email: any;
  pass: any;
  confpass: any;

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }

  submit(){
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.email);
    console.log(this.pass);
    console.log(this.confpass);
    this.register(this.fname,this.lname,this.email,this.pass,this.confpass).subscribe({
      next: (data) =>{
        console.log(data);
        this.router.navigateByUrl('/login');
        this.email='';
        this.pass='';
        this.fname='';
        this.lname='';
        this.confpass='';
      },
      error: async (error) =>{
        console.log(error);
        // alert("Invalid Login Credentials");
        const alert = await this.alertController.create({
          header:'Someting went wrong',
          subHeader:'User Registration Failed',
          message: 'Please try again.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }

  register(first_name: string,last_name:string,email: string,password: string,password_confirm:string){
    return this.http.post('http://localhost:8000/api/register',{first_name,last_name,email,password,password_confirm});
  }

  ngOnInit() {
  }

}
