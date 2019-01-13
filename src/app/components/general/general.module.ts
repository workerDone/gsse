import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { NgxPhoneMaskModule } from 'ngx-phone-mask';

import { GeneralRoutingModule } from './general-routing.module';

import { DefaultComponent } from './components/default/default.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { UiModule } from '../../shared/components/ui.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxPhoneMaskModule,
    UiModule,
  ],
  declarations: [
    DefaultComponent,
    ContactsComponent,
    AboutUsComponent,
    ProductsComponent
    ]
})
export class GeneralModule { }
