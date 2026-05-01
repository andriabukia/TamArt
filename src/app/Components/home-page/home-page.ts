import { Component } from '@angular/core';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
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
