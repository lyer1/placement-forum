import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CompanyCardComponent } from '../company-card/company-card.component';
import { Company, Stage } from '../implementation/app.implementation.company';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
import { QuestionCardComponent } from '../question-card/question-card.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CommonMethodsService } from '../common-methods.service';
import { Question } from '../implementation/app.implementation.question';


@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [ScrollingModule, QuestionCardComponent, NgFor, CommonModule, MatTabsModule, CompanyCardComponent, MatCardModule, MatButtonModule],
  template: `
    <mat-tab-group>
      <mat-tab label="Details"> 
        
        <mat-card appearance="outlined">
          <mat-card-header class ="details-tab" >
            <div mat-card-avatar class="header-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" width="27px">
            </div>
            <mat-card-title>{{service.fetchCurrSelectedCompany().name}}</mat-card-title>
            <mat-card-subtitle>{{service.fetchCurrSelectedCompany().subtitle}}</mat-card-subtitle>
          </mat-card-header>
        </mat-card>
        

        <mat-card-content>
          <p class = "content">
            Amazon is an American multinational technology company, engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.
            It is considered one of the Big Five American technology companies; the other four are Alphabet (parent company of Google), 
            Apple, Meta (parent company of Facebook), and Microsoft.
          </p>
        </mat-card-content>
        <mat-card-actions style="display: flex; justify-content: center; align-items: center;">
          <button mat-button class="share-button">SHARE</button>
        </mat-card-actions>
      
      </mat-tab>
        <div *ngFor="let currStage of service.fetchCurrSelectedCompany().stages" class="viewport-item">
          
            
            <mat-tab [label]="currStage.name">

            <cdk-virtual-scroll-viewport itemSize="10" class="viewport">
              <div *cdkVirtualFor="let item of service.fetchQuestions()" class="viewport-item">
                <app-question-card [q1]="item"></app-question-card>
              </div>
            </cdk-virtual-scroll-viewport>
          </mat-tab>
          
        </div>
  </mat-tab-group>

  `,
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {

    // stage: Stage =  {"name": "Online Assesssment", "content": "Online Assessment aha haha"};
  // stage2: Stage =  {"name": "Interview", "content": "interview aha haha"};
  // stage3: Stage =  {"name": "HR Interview", "content": "hr interview aha haha"};
  
  // company: Company = {id: "1", name: 'Amazon', 'imgUrl': "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", 'stages': [this.stage, this.stage2, this.stage3], 'subtitle': 'IT/Development'};
  q1:Question;
  fa: number[] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15];
  constructor(public service: CommonMethodsService){
    this.q1 = service.fetchQuestions()[0];
  }

}
