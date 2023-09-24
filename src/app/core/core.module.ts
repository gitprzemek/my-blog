import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent,
    MainComponent,
    FooterComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class CoreModule { }
