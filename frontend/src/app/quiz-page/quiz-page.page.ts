import { Component, OnInit ,Input} from '@angular/core';
import { Router } from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QuizPagePage implements OnInit {

  @Input() data!: string;

  signout(){
    this.router.navigateByUrl('/login');
    this.quit();
  }


  showWarning: boolean = false;

  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: any[]= [];
  currentQuestionNo: number = 0;

  // remainingTime:number = 10;

  // timer = interval(1000);
  // subscription: Subscription [] = [];
  correctAnswerCount: number = 0;



  constructor(private http: HttpClient,private router: Router) { 
  }

  ngOnInit(): void { 
    this.loadQuestions();
  }
  loadQuestions() {
    this.http.get("assets/quiz-data.json").subscribe((res:any)=>{
      this.questionsList = res;
    })
  }
  nextQuestion() {
    if(this.currentQuestionNo < this.questionsList.length-1) {
      this.currentQuestionNo ++;
    }
    //  else {
    //   this.subscription.forEach(element => {
    //     element.unsubscribe();
    //   });
    // } 
  }
  finish() {
    this.isQuizEnded = true;
    this.isQuizStarted = false;  
  }

  start() {
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;  
  }

  quit(){
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;  
    this.correctAnswerCount = 0;
    this.currentQuestionNo = 0;
    this.loadQuestions();
  }

  restart(){
    this.isQuizEnded = false;
    this.isQuizStarted = true;  
    this.correctAnswerCount = 0;
    this.currentQuestionNo = 0;
    this.loadQuestions();
  }

  showWarningPopup() {
    this.showWarning = true;
  }

  selectOption(option: any) {
    if(option.isCorrect) {
      this.correctAnswerCount ++;
    }
    option.isSelected = true;
  }
  isOptionSelected(options: any) {
    const selectionCount = options.filter((m:any)=>m.isSelected == true).length;
    if(selectionCount == 0) {
      return false;
    } else {
      return true;
    }
  }
  startQuiz() {
    this.showWarning = false;
    this.isQuizStarted = true;  
  //  this.subscription.push(this.timer.subscribe(res=> {
  //     console.log(res);
  //     if(this.remainingTime != 0) {
  //       this.remainingTime --;
  //     } 
  //     if(this.remainingTime == 0) {
  //       this.nextQuestion();
  //       this.remainingTime = 10;
  //     } 
  //   })
  //  )
  }

}
