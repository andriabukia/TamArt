import { Component } from '@angular/core';
import { LanguageService } from '../../language-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artwork',
  imports: [CommonModule],
  templateUrl: './artwork.html',
  styleUrl: './artwork.scss',
})
export class Artwork {
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



  paintings = [
    {
    image: '/assets/images/Tamart9.jpg',
    title: 'T8',
    description: 'Extra1',
    Gel: 80,
    open: false
  },
    {
    image: '/assets/images/Tamart17.jpg',
    title: 'T11',
    description: 'Extra2',
    Gel: 70,
    open: false
  },
      {
    image: '/assets/images/Tamart16.jpg',
    title: 'T11',
    description: 'Extra2',
    Gel: 70,
    open: false
  },

];

instruments = [
      {
    image: '/assets/images/Tamart3.jpg',
    title: 'T2',
    description: 'Extra4',
    Gel: 75,
    open: false
  },
        {
    image: '/assets/images/Tamart5.jpg',
    title: 'T4',
    description: 'Extra5',
    Gel: 45,
    open: false
  },
        {
    image: '/assets/images/Tamart6.jpg',
    title: 'T5',
    description: 'Extra6',
    Gel: 30,
    open: false
  },
        {
    image: '/assets/images/Tamart7.jpg',
    title: 'T6',
    description: 'Extra7',
    Gel: 60,
    open: false
  },
        {
    image: '/assets/images/Tamart10.jpg',
    title: 'T9',
    description: 'Extra8',
    Gel: 85,
    open: false
  },
        {
    image: '/assets/images/Tamart13.jpg',
    title: 'T2',
    description: 'Extra9',
    Gel: 75,
    open: false
  },
];

other = [
  {
    image: '/assets/images/Tamart2.jpg',
    title: 'T1',
    description: 'Extra10',
    Gel: 15,
    open: false
  },
        {
    image: '/assets/images/Tamart8.jpg',
    title: 'T7',
    description: 'Extra11',
    Gel: 45,
    open: false
  },
        {
    image: '/assets/images/Tamart12.jpg',
    title: 'T10',
    description: 'Extra12',
    Gel: 50,
    open: false
  },
];

activeSection: string = '';

toggle(item: any) {
  item.open = !item.open;
}

}
