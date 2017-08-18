import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes} from'@angular/router';
import { RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductService } from './product/service/product-service';
import { HeaderComponent } from './header/header.component';
import { ShortenPipe } from './pipe/shorten-pipe';
import { DuplicatePipe } from './pipe/duplicatePipe';
import { FilterPipe } from './pipe/filter-pipe';
const appRoute: Routes =[
  {path: 'listProduct', component: ProductListComponent},
  {path: 'createProduct', component: ProductAddComponent},
  {path: 'product', component: ProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    HeaderComponent,
    ShortenPipe,
    DuplicatePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Ng2DragDropModule.forRoot(),
    RouterModule.forRoot(appRoute)
  ],
  providers: [ProductService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
