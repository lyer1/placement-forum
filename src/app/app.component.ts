import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core'; 
import { CommonModule} from '@angular/common';
import { RouterOutlet, RouterModule} from '@angular/router';
import { MatDividerModule } from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon';
import {MatNavList} from '@angular/material/list'
import { MatListItem } from '@angular/material/list';
import { MatList } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { CommonMethodsService } from './common-methods.service';
import { Company } from './implementation/app.implementation.company';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatListItem, MatNavList, MatIconModule, 
    RouterOutlet, MatDividerModule, MatCardModule, MatButtonModule, 
    MatSidenavModule, MatToolbarModule, CommonModule, MatList,
    ScrollingModule, SearchBarComponent, CompanyCardComponent, CompanyDetailsComponent,
    OverlayModule],
  
  template: `
    <div class="header-div">
      <mat-toolbar color="primary">
        <mat-toolbar-row>
            <button mat-mini-fab (click)="toggle()" class="sidebar-icon"><mat-icon>menu</mat-icon></button> 
            <!-- <img src="/assets/logoNoBag.svg" class="logo-image"> -->
              <svg xmlns="http://www.w3.org/2000/svg" class="logo-image" width="533.674" height="109.267" viewBox="0 0 141.201 28.91"><g style="fill:#fff"><path d="M51.532 195.401h13.269v16.992H51.532Z" style="fill:#fff;stroke:none;stroke-width:.542688;stroke-linecap:round;stroke-linejoin:round" transform="matrix(.52491 0 0 .43038 14.626 -62.81)"/><path d="M82.019 196.332h13.269v16.314H82.019Z" style="fill:#fff;stroke:none;stroke-width:.53175;stroke-linecap:round;stroke-linejoin:round" transform="matrix(.52491 0 0 .43038 14.626 -62.81)"/></g><text xml:space="preserve" x="-16.192" y="121.095" style="font-size:35.4938px;line-height:1.25;font-family:&quot;CADILLAC PERSONAL USE&quot;;-inkscape-font-specification:&quot;CADILLAC PERSONAL USE&quot;;fill:#fff;stroke-width:.887341" transform="translate(14.13 -92.343)"><tspan x="-16.192" y="121.095" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:&quot;Franklin Gothic Heavy&quot;;-inkscape-font-specification:&quot;Franklin Gothic Heavy, &quot;;fill:#fff;stroke-width:.887341">PL</tspan></text><text xml:space="preserve" x="51.803" y="120.889" style="font-size:35.4938px;line-height:1.25;font-family:&quot;CADILLAC PERSONAL USE&quot;;-inkscape-font-specification:&quot;CADILLAC PERSONAL USE&quot;;fill:#fff;fill-opacity:1;stroke-width:.887341" transform="translate(14.13 -92.343)"><tspan x="51.803" y="120.889" style="font-style:normal;font-variant:normal;font-weight:400;font-stretch:normal;font-family:&quot;Franklin Gothic Heavy&quot;;-inkscape-font-specification:&quot;Franklin Gothic Heavy, &quot;;fill:#fff;fill-opacity:1;stroke-width:.887341">CED.</tspan></text><g class="bag-svg" style="fill:#b3b3b3;stroke:none"><path d="M211.074 252.078v30.475H162.26l-1.281.691c-1.638.884-2.858 2.173-3.588 3.793-.52 1.155-.587 2.579-.676 14.416l-.1 13.135 20.602 4.623a10876 10876 0 0 1 34.217 7.736c7.488 1.713 13.867 3.13 14.175 3.147.505.028.56-.355.56-3.83 0-4.243.286-5.22 1.827-6.264.837-.567 1.617-.607 11.629-.607s10.792.04 11.629.607c1.541 1.045 1.826 2.021 1.826 6.264 0 2.123.13 3.861.287 3.861.158 0 6.393-1.377 13.856-3.059 21.912-4.938 54.988-12.318 55.209-12.318.112 0 .158-5.947.103-13.215-.09-11.914-.155-13.34-.676-14.496-.73-1.62-1.95-2.91-3.588-3.793l-1.28-.691h-48.893v-30.475c.132-3.791-4.734-3.805-9.291-3.805H217.04c-2.766-.145-5.886 1.593-5.966 3.805m9.291 5.486h38.442v24.989h-38.442Z" style="fill:#b3b3b3;stroke:none;stroke-width:.669565;stroke-linecap:round;stroke-linejoin:round" transform="translate(17.848 -36.758)scale(.14806)"/><path d="M43.065 104.462a1.95 1.95 0 0 1-1.431-1.14c-.143-.317-.154-.868-.176-8.835-.02-7.285-.007-8.498.096-8.498.066 0 .973.193 2.016.429 1.042.236 3.325.749 5.073 1.14 1.749.392 3.541.808 3.984.925s2.158.52 3.81.896 3.09.706 3.195.732c.19.048.191.057.217 1.982.025 1.915.027 1.937.23 2.154a1.3 1.3 0 0 0 .51.303c.396.11 5.21.11 5.606 0a1.3 1.3 0 0 0 .509-.303c.203-.217.206-.238.23-2.162.015-1.068.036-1.942.048-1.942.09 0 6.276-1.424 7.194-1.656.64-.162 2.032-.487 3.093-.723 1.062-.235 3.273-.731 4.914-1.101s3.024-.674 3.075-.674c.065 0 .085 2.439.068 8.498-.022 7.976-.033 8.518-.177 8.836a1.97 1.97 0 0 1-.991 1.007l-.381.18-20.173.012c-11.095.007-20.338-.02-20.54-.06" style="fill:#b3b3b3;stroke:none;stroke-width:.177156;stroke-linecap:round;stroke-linejoin:round" transform="translate(17.848 -36.758)scale(.5596)"/></g></svg>            <!-- <img src="/assets/bag.svg" class="logo-bag-image"> -->
        </mat-toolbar-row>
      </mat-toolbar>
    </div>
    
    <ng-container *ngIf="displaySidenav">
        <mat-sidenav-container>
          <mat-sidenav class="sidenav" #sidenav [opened]="displaySidenav" [mode]="'side'"> 
              <mat-nav-list>
                <a mat-list-item [routerLink]="'/provideLink'" routerLinkActive="active-list-item" class="sidenav-item">
                  Home<mat-icon>home</mat-icon>
                </a>
                <a mat-list-item [routerLink]="'/provideLink'" routerLinkActive="active-list-item" class="sidenav-item">
                  Companies<mat-icon>work</mat-icon>
                </a>
              </mat-nav-list>
          </mat-sidenav>
            <mat-sidenav-content>
              <div style="height: 90vh">
                  <router-outlet></router-outlet>
              </div>
            </mat-sidenav-content>
        </mat-sidenav-container>
    </ng-container>

    <app-search-bar style="z-index: 1;" cdkOverlayOrigin #trigger = "cdkOverlayOrigin"></app-search-bar>
    
    <div class="company-details">
      <app-company-details></app-company-details>
    </div>
    <ng-template
    cdkConnectedOverlay
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="true">
      <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
        <div *cdkVirtualFor="let item of service.fetchCompanies()" class="viewport-item">
          <app-company-card (click)="service.updateCurrSelectedID(item.id)" [name]="item.name" [subtitle]="item.subtitle"></app-company-card>
        </div>
      </cdk-virtual-scroll-viewport>
    </ng-template>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'majorCompanyMock';
  displaySidenav: boolean = false;
  items = Array.from({length: 40}).map((_, i) => `Item #${i}`);
  curr_selected: string = "1";

  constructor(public service: CommonMethodsService){}

  toggle(){
    this.displaySidenav = !this.displaySidenav;
  }
}
