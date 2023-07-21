import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ProductsService:ProductsService) {

  }
  categories:any [] = [];
  ngOnInit(): void {
    this._ProductsService.getCategories().subscribe({
      next:(response) => {
        // console.log(response.data);
        this.categories = response.data;
        
      }
    })
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },
    },
    nav: true
  }
}
