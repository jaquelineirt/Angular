import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: any;

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.livros = this.bookService.getBooks().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }))

  }
  
}
