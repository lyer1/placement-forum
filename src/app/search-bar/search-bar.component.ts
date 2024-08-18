import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonMethodsService } from '../common-methods.service';
import { TagsComponent } from '../tags/tags.component';
import { MatMenuModule, MatMenuItem } from '@angular/material/menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatToolbar, MatMenuModule, MatIcon, MatButton, MatIconButton, TagsComponent, MatMenuItem, CommonModule],
  template: `
    <div class="search-container">
      <button mat-icon-button>
        <mat-icon>search</mat-icon>
      </button>  
      <input placeholder="Search" #inputText (input)="service.searchBarText=inputText.value">
        <button mat-button [matMenuTriggerFor]="menu" class="tags" >Tags<mat-icon>filter_list</mat-icon>
          <mat-menu #menu="matMenu" class="tags-menu">  
            <app-tags-dropdown></app-tags-dropdown>
          </mat-menu>
        </button>
      <span class="active-tags">
        <button mat-button class="active-tags-item" *ngFor="let tag of service.fetchCurrActiveTags()" (click) ="service.removeTag(tag)">{{tag}}<mat-icon>close</mat-icon></button>
      </span>    
    </div>
    
  `,
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(public service: CommonMethodsService){}
}
