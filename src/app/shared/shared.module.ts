import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SiderbarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  exports: [
    SiderbarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
