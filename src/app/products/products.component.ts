import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Product } from './shared/product.model';

import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  subPro: Subscription;


  constructor(private productService: ProductService, private productTitle: Title) { }

  ngOnInit() {
    this.productTitle.setTitle('สินค้า')
    this.productService.getProduct().subscribe( //การเชื่อมต่อ Backend
      (products) => {
        this.products = products;
        // console.log(products);
      }
    )
  }
  // ngOnDestroy(){
  //   this.subPro.unsubscribe();
  // }

}
