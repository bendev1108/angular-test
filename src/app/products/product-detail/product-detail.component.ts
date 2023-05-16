import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  title: String;
  productDetail: any[];
  subProDe: Subscription;

  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.id = +this.router.snapshot.paramMap.get('id');
    this.title = this.router.snapshot.paramMap.get('title');
    this.getDetail();
  }

  getDetail(){
    this.productService.getDetail(this.id).subscribe(
      (productDetail) => {
        // console.log(productDetail);
        this.productDetail = productDetail;
      }
    );
  }
  ngOnDestroy(){
    this.subProDe.unsubscribe();
  }

}
