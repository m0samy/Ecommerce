import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brnaddetails',
  templateUrl: './brnaddetails.component.html',
  styleUrls: ['./brnaddetails.component.css']
})
export class BrnaddetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService) {

  }

  brandDetails:any;
  brandId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.brandId = params.get('ID')
    });

    this._ProductsService.getBrandDetails(this.brandId).subscribe({
      next:(response) => {
        // console.log(response.data);
        this.brandDetails = response.data;
        
      }
    })
  }
}
