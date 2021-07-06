import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// component
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  imports: [CommonModule],
  exports: [
    BannerComponent,
    SliderComponent
  ],
  declarations: [
    BannerComponent,
    SliderComponent
  ],
  providers: []
})
export class UiModule { }
