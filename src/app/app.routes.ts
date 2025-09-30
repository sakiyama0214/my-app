import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductComponent,
        children: [
            {path: '', component: ProductListComponent},
            {path: ':productId', component: ProductDetailComponent},
        ]
    },
];
