import { Component, Input } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule} from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CommonMethodsService } from '../common-methods.service';

@Component({
  selector: 'app-tags-dropdown',
  standalone: true,
  imports: [MatMenuModule, CommonModule, MatButtonModule, MatCardModule],
  template: `
  <div class ="tags-menu">
      <button mat-button class="tags-menu-item" *ngFor="let tag of tags" (click)="service.addTag(tag)">{{tag}}</button>
  </div>
  `,
  styles: `
    .tags-menu {
      width: 300px; 
      padding: 10px 10px;
      
    }
    .tags-menu-item{
        margin-top: 5px;
        margin-left: 5px;
        padding: 7px 10px 7px 10px;
        border-radius: 40px;
        background-color: rgb(222, 220, 220);
    }
    
  `
})
export class TagsComponent {
  tags: string[] = ["IT/Development", "Frontend", "Backend", "Consultancy", "Marketing"];
  @Input() isOpen: boolean = true;
  constructor(public service: CommonMethodsService){}
}
