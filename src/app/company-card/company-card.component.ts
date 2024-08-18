import { Component, Input } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonMethodsService } from '../common-methods.service';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [MatCard, MatCardModule],
  template: `
    <mat-card class="card" appearance="outlined">
      <mat-card-header>
        <div mat-card-avatar class="header-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" width="27px">
        </div>
        <mat-card-title style="font-size: medium;">{{this.name}}</mat-card-title>
        <mat-card-subtitle>{{this.subtitle}}</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
    

  `,
  styleUrl: './company-card.component.css'
})
export class CompanyCardComponent {
  @Input() name:string = "Amazon";
  @Input() subtitle:string = "IT/Development";
  // constructor(public service: CommonMethodsService){}
}
