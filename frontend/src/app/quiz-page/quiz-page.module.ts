import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPagePageRoutingModule } from './quiz-page-routing.module';

import { QuizPagePage } from './quiz-page.page';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPagePageRoutingModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  declarations: [QuizPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuizPagePageModule {}
