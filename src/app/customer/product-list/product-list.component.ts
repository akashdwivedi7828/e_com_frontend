import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/component/product/Product';
import { CategoryService } from 'src/app/service/category-service.service';
import { DataTodoService } from 'src/app/service/data-todo.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  showSuccessPopup = false;
  searchText: string = '';
  categories: any[] = [];
  selectedCategory: any;

  // Inside your component class
selectedQuantities: { [productid: number]: number } = {};

  constructor(private router: Router, private datatodoservice: DataTodoService, private route: ActivatedRoute,private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.selectedQuantities = {};
    this.getAllProducts();
    this.getAllCategories();
  }

  clearFilters(): void {
    this.selectedCategory = null;
    this.searchText = ''; // Clear the search input
    this.onSearch(); // Call the search function to update the filtered products.
  }
  
  getAllProducts(): void {
    this.datatodoservice.getAllProducts().subscribe(
      (response: Product[]) => {
        // this.products = response.map((product) => ({
        //   ...product,
        //   editing: false, // Add the 'editing' property
        // }));
        console.log("@@products response", response)
        this.products = response;
        this.filteredProducts = response;
        for (const product of response) {
          this.selectedQuantities[product.productid] = 1; // Default to 1
        }
        console.log(response);
      },
      (error) => {
        console.error('@@Error purchasing product:', error);
        // Handle error, e.g., display an error message
      }
    );
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      console.log("@@categories response", data)
      this.categories = data;
    });
  }

  setSelectedCategory(category: any): void {
    console.log("@@cat1", category, this.products)
    this.selectedCategory = category;
    // this.products = this.products.filter(product => product?.category?.categoryid && product?.category?.categoryid == category.categoryid)

    console.log("@@cat", category, this.products)
  }


onSearch(): void {
  // Implement the search logic here
  // Filter the products based on searchText
  if(this.searchText.trim()){

    this.filteredProducts = this.products.filter((product) =>
      product.productname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.productdetail.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.productprice.toString().includes(this.searchText)
    );
  }
  else{
    this.filteredProducts = JSON.parse(JSON.stringify(this.products))
  }
  
}

  setSelectedQuantity(productId: any, quantity: any): void {
    this.selectedQuantities[productId] = quantity;
  }

  getSelectedQuantity(productId: any): number {
    return this.selectedQuantities[productId] || 1 // Default to 0 if not set
  }

  onQuantityChange(productId:any, event: any): void {
    const newQuantity = event.target.value;
    // Call setSelectedQuantity to update the selected quantity for the product
    this.setSelectedQuantity(productId, newQuantity);
  }

  getQuantityOptions(maxQuantity: any): number[] {
    return Array.from({ length: maxQuantity }, (_, i) => i + 1);
  }

  buyNow(product: any) {
    let price = product.productprice * this.getSelectedQuantity(product.productid);
    const request = {
      userid:  parseInt(this.route.snapshot.params['userid']),
      productid: product.productid,
      quantity: this.getSelectedQuantity(product.productid),
      totalPrice: price
    };

    this.datatodoservice.buyProduct(request).subscribe(
      (response: any) => {
        console.log('Product purchased successfully:', response);
        // Handle success, e.g., show a confirmation message
        this.showSuccessPopup = true;
        alert('Success! You have successfully purchased the product.');
        this.getAllProducts();
      },
      (error) => {
        console.error('Error purchasing product:', error);
        // Handle error, e.g., display an error message
      }
    );
  }
}
