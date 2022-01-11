import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articlenew',
  templateUrl: './articlenew.component.html',
  styleUrls: ['./articlenew.component.scss'],
})
export class ArticlenewComponent implements OnInit {

  fg: FormGroup;
  constructor(
    private builder: FormBuilder,
    private modal: ModalController,
    private articleservice: ArticleService
  ) { }

  ngOnInit() {
    this.fg = this.builder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      info: ['']
    });
  }

  onSubmit() {
    const values = this.fg.value;
    this.articleservice.add(values);
    this.modal.dismiss(true);
  }

  cancel() {
    this.modal.dismiss(false);
  }

}
