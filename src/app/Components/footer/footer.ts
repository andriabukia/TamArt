import { Component } from '@angular/core';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
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
