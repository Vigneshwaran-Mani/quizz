import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit {


  email: any;
  password:any;

  constructor(private http: HttpClient, private router: Router, private alertController: AlertController) { }

  submit(){
    console.log(this.password);
    console.log(this.email);
    this.logIn(this.email,this.password).subscribe({
      next: (data) =>{
        console.log(data);
        this.router.navigateByUrl('/quiz-page');
        this.email='';
        this.password='';
      },
      error: async (error) =>{
        console.log(error);
        // alert("Invalid Login Credentials");
        const alert = await this.alertController.create({
          header:'Login Failed',
          subHeader:'Your email or password is incorrect.',
          message: 'Please try again.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }

  logIn(email: string,password: string){
    return this.http.post('http://localhost:8000/api/login',{email,password});
  }

  ngOnInit() {
  }








}
