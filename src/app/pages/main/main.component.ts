import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';
import { DefaultMainLayoutComponent } from '../../components/default-main-layout/default-main-layout.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    DefaultMainLayoutComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Product[] = [];
  errorLoading = false;

  // Adicionar produto
  newProduct: Product = {
    id: 0,
    name: '',
    unitPrice: 0,
    quantity: 0,
    description: ''
  };
  showForm = false;

  // Editar produto
  editingProductId: number | null = null;
  editProductData: Product = {
    id: 0,
    name: '',
    unitPrice: 0,
    quantity: 0,
    description: ''
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.errorLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.errorLoading = true;
      }
    });
  }

  // Adicionar produto
  addProduct(): void {
    if (!this.newProduct.name || this.newProduct.unitPrice <= 0 || this.newProduct.quantity < 0) {
      alert('⚠️ Preencha todos os campos corretamente!');
      return;
    }

    this.productService.addProduct(this.newProduct).subscribe({
      next: (createdProduct) => {
        this.products.push(createdProduct);
        alert('✅ Produto adicionado com sucesso!');
        this.resetForm();
        this.showForm = false;
      },
      error: (err) => {
        console.error('Erro ao adicionar produto:', err);
        alert('❌ Ocorreu um erro ao adicionar o produto.');
      }
    });
  }

  resetForm(): void {
    this.newProduct = {
      id: 0,
      name: '',
      unitPrice: 0,
      quantity: 0,
      description: ''
    };
  }

  // Remover produto
  onDelete(productId: number): void {
    const confirmDelete = confirm('🗑️ Você tem certeza que deseja remover este produto?');

    if (confirmDelete) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== productId);
          alert('✅ Produto removido com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao remover produto:', err);
          alert('❌ Ocorreu um erro ao remover o produto.');
        }
      });
    }
  }

  // Editar produto
  startEdit(product: Product): void {
    this.editingProductId = product.id;
    this.editProductData = { ...product };
  }

  cancelEdit(): void {
    this.editingProductId = null;
  }

  saveEdit(): void {
    this.productService.updateProduct(this.editProductData).subscribe({
      next: (updatedProduct) => {
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
        this.editingProductId = null;
        alert('✅ Produto atualizado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao atualizar produto:', err);
        alert('❌ Ocorreu um erro ao atualizar o produto.');
      }
    });
  }
}
