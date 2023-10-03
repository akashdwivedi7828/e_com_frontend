export class Product {
    [key: string]: any;
    productid: number = 0; 
    productname: string = '';
    productimage?: string | null; 
    noofproduct: number = 0;
    productdetail: string = '';
    productprice: number = 0.0;
    editing?: boolean = false;
    category?: any;
    constructor(
      productname?: string, 
      productimage?: string | null,
      noofproduct?: number,
      productdetail?: string,
      productprice?: number,
      editing?: boolean,
      category?: any
    ) {
      if (productname) {
        this.productname = productname;
      }
      if (productimage) {
        this.productimage = productimage;
      }
      if (noofproduct !== undefined) {
        this.noofproduct = noofproduct;
      }
      if (productdetail) {
        this.productdetail = productdetail;
      }
      if (productprice !== undefined) {
        this.productprice = productprice;
      }

      if (editing !== undefined) {
        this.editing = editing;
      }

      if (category !== undefined) {
        this.category = category;
      }
    }
  }
  