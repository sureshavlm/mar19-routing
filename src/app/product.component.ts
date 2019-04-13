import { Component, route } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'product-component',
	template: '<p>Product Details - {{id}}</p>'
})

export class ProductComponent {

	route: ActivatedRoute;
	id: string;

	constructor(private route: ActivatedRoute){

		
	}

	ngOnInit() {


	    this.sub = this.route.params.subscribe(params => {
	       this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }
	
}