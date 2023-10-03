import { CategoryService } from './../../../service/category-service.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTodoService } from 'src/app/service/data-todo.service';
import { Product } from '../Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent {
  product: Product = new Product(); // Initialize an empty product object
  sellerid: number;
  categories: any[] = [];
  constructor(private productService: DataTodoService, private route: ActivatedRoute, private router:Router,private categoryService: CategoryService) {
    this.sellerid = parseInt(this.route.snapshot.params['sellerid']);
  }

  ngOnInit(): void {
   this.fetchCategories()
  }


  // Function to handle file change event
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // You can perform actions with the selected file here
      console.log('File selected:', file);
      this.product.productimage = file;
    }
  }

  // Function to handle form submission
  onSubmit(): void {
    console.log("@@pro", this.product)
    this.productService.addProduct(this.product, this.sellerid, parseInt(this.product.category)).subscribe(
      (response: Product) => {
        console.log('Product added successfully:', response);
        // Reset the form after successful submission
        this.product = new Product();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

  onCategoryChange(event: any): void {
    // event.target.value contains the selected category ID
    const selectedCategoryId = event.target.value;
    
    // Find the category object with the selected ID in the categories array
    const selectedCategory = this.categories.find(category => category.categoryid === selectedCategoryId);
    
    // Update the category property of the product
    this.product.category = selectedCategory.categoryid;
  }
  

  fetchCategories(): void {
    // Call your service to fetch categories and store them in this.categories
    // Example:
    this.categoryService.getAllCategories().subscribe(
      (response): any=> {
        this.categories = response;
      },
      (error) => {
        this.categories = JSON.parse(error.text);
        console.error('Error fetching categories:', error);
      }
      
    );

    // this.categoryService.getAllCategories().subscribe((data) => {
    //   console.log("@@categories response", data)
    //   this.categories = data;
    // });
  }

  redirectToProductListing() {
    this.router.navigate(['productlist',this.sellerid]);
  }
}


