import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';

import {MatCardModule} from '@angular/material/card';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [BlogListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BlogModule { }
