import { Component } from '@angular/core';
import { LanguageService } from '../../language-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
translations: any = {};
  currentLang: 'en' | 'geo' = 'en';
  currentFlag = '/images/engflag.webp';

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.lang$.subscribe(lang => {
      this.currentLang = lang;
      this.translations = this.langService.getTranslations(lang);

      this.currentFlag =
        lang === 'en'
          ? '/images/engflag.webp'
          : '/images/Georgia.webp';
    });
  }

  
  

  switchLang() {
    this.langService.switchLang();
  }
}
