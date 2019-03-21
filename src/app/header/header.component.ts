import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/1450/300?random&t=${Math.random()}`
  );
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  ngOnInit() {}

  menu:any =["About","Home"];


  title = "Create Loan Application";
  brand ="Loan Management System";

  changeLang(language: string) {
    this.translate.use(language);
  }
}
