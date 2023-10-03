import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTodoService } from 'src/app/service/data-todo.service';
import { Product } from '../Product';

@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent {
  products: Product[] = [];
  sellerid: any;
  editingProduct: Product | null = null;
  p: number = 1; // Current page number, initialize it to 1
  itemsPerPage: number = 5;
  pageId = 'pageId';
  constructor(private router: Router, private datatodoservice: DataTodoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllData();
  }
  

  redirectToAddProduct() {
    this.router.navigate(['addproduct', this.sellerid]);
  }

  onPageChange(newPage: any): void {
    this.p = newPage;
    this.getAllData();
  }

  editProduct(product: Product): void {
    // Enter editing mode for the selected product
    product.editing = true;
    this.editingProduct = { ...product };
    console.log("@@product", this.editingProduct)
  }

  saveProduct(product: Product): void {
    // Call the API to save the edited product details
    this.datatodoservice.editProduct(product).subscribe(
      (response: Product) => {
        // Update the product in the list with the edited data
        const index = this.products.findIndex((p) => p.productid === response.productid);
        if (index !== -1) {
          this.products[index] = response;
        }
        // Exit editing mode
        this.editingProduct = null;
      },
      (error) => {
        console.error('Error editing product:', error);
      }
    );
  }

  cancelEdit(product: Product): void {
    product.editing = false
    this.editingProduct = null;
  }

  deleteProduct(productId: number | undefined): void {
    // Call the API to delete the selected product
    if (productId !== undefined) {

      this.datatodoservice.deleteProduct(productId).subscribe(
        () => {
          // Remove the deleted product from the list
          
          this.products = this.products.filter((p) => p.productid != productId);
          console.log("@@products", this.products)
        },
        (error) => {
          this.products = this.products.filter((p) => p.productid != productId);
        }
      );
    }
    else{

    }
  }

  getAllData() {
    this.sellerid = parseInt(this.route.snapshot.params['sellerid']);
    this.datatodoservice.getAllProductOfSeller(this.sellerid).subscribe(
      (response: Product[]) => {
        console.log("@@pro listing -----------", response)
        this.products = response.map((product) => ({
          ...product,
          editing: false
        }
        
        ));
        console.log(response);
      },
      (error) => {
        console.log("@@", error.text)
        let data = JSON.parse(error.text);
        this.products = data.map((ele: any) => ({
          ...ele, 
          editing: false
        }))
      }
    );
  }
}
