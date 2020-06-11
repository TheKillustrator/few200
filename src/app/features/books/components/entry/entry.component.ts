import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  bookForm: FormGroup;
  formats: any = ['Hardcover', 'Paperback', 'Ebook', 'Audiobook'];
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: [''],
      author: [''],
      format: ['']
    });
  }

  submit() {
    console.log(this.bookForm.value);
  }
}
