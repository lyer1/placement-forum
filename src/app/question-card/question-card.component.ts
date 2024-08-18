import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Question } from '../implementation/app.implementation.question';
import { NgFor, CommonModule } from '@angular/common';
import { CommonMethodsService } from '../common-methods.service';


@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [MatCardModule, NgFor, CommonModule],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="header-image">
          <img src="/assets/kim.jpeg" width="50px" style="border-radius: 50%;">
        </div>
        <mat-card-title>{{this.q1.title}}</mat-card-title>
        <mat-card-subtitle>{{this.q1.poster + ", " + this.q1.posterEmail}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content class="content">
      {{this.q1.content}}
      </mat-card-content>
    </mat-card>
    

  `,
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
//   @Input() q1: Question = {id: "1", poster: "Kim Kitsuragi", title: "Find the Maximum Achievable Number", posterEmail: "2105####@kiit.ac.in",
//     content: `Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:

// Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
// Return the maximum achievable number after applying the operation at most t times.`,
//   }
  @Input() q1!: Question;
  questions: Question[] = [this.q1];

  constructor(){  }
}
