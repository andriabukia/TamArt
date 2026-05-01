import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<'geo' | 'en'>('geo');
  lang$ = this.currentLang.asObservable();

  translations = {
    en: {
       home: 'Home',
      contact: 'About Us',
      footer: 'Tbilisi Georgia',
      Phone: '+995 591 884 888',
      Email: 'tnadiradzebukia@gmail.com',
      Facebook: 'Facebook page: Tamart',
      Art:'Art, a way to inner freedom',
      ArtText: 'Art is a powerful form of expression that allows individuals to explore their inner world and find freedom through creativity. It encompasses various mediums such as painting, sculpture, music, dance, and literature, providing a means for self-discovery and emotional release. Through art, people can transcend the constraints of everyday life and connect with their innermost thoughts and feelings, ultimately leading to a sense of liberation and personal growth.'
      ,artwork: 'Photo gallery',
      insta: 'Instagram: Tamart'
      ,FaceB:'Facebook: Tamart',
          T1:'Snowflake',
      T2:'Piano',
        T3:'Drum',
        T4:'Chello',
        T5:'Guitar',
        T6:'Harp',
        T7:'Figure',
        T8:'Portrait of Vazha',
        T9:'Accordion',
        T10:'high heels',
        T11:'Painting',
        artworkDef: 'our artwork',
        Extra1: 'This is a portrait of Vazha Pshavela, a famous Georgian poet and writer.',
        Extra2: 'This is a leather painting inspired by parts of cut leather.',
        Extra4: 'This is a piano made entirely out of leather and cardboard.',
        Extra5: 'This is a cello made entirely out of leather.',
        Extra6: 'This is a guitar made entirely out of leather.',
        Extra7: 'This is a figure made entirely out of leather.',
        Extra8: 'This is an accordion made entirely out of leather.',
        Extra9: 'This is a pair of high heels made entirely out of leather.',
        Extra10: 'This is a snowflake made entirely out of leather.',
        Extra11: 'This is a drum made entirely out of leather.',
        Extra12: 'This is a painting made entirely out of leather.',
        Paintings: 'Paintings',
        Instruments: 'Instruments',
        Other: 'Other'
      

    },
    geo: {
      home: 'მთავარი',
      contact: 'ჩვენ შესახებ',
      footer: 'თბილისი/საქართველო',
      Phone: '+995 591 884 888',
      Email: 'tnadiradzebukia@gmail.com',
      Facebook: 'Facebook გვერდი: Tamart',
       Art:'ხელოვნება, გზა შინაგანი თავისუფლებისკენ',
      ArtText: 'ხელოვნება არის ძლიერი გამოხატვის ფორმა, რომელიც საშუალებას აძლევს ადამიანებს შეისწავლონ თავიანთი შინაგანი სამყარო და იპოვონ თავისუფლება შემოქმედებითობის მეშვეობით. ის მოიცავს სხვადასხვა მედიუმს, როგორიცაა ხატვა, ქანდაკება, მუსიკა, ცეკვა და ლიტერატურა, რაც საშუალებას აძლევს თვითაღმოჩენასა და ემოციურ განთავისუფლებას. ხელოვნების საშუალებით ადამიანები შეუძლიათ გადალახონ ყოველდღიური ცხოვრების შეზღუდვები და დაუკავშირდნენ თავიანთ ყველაზე შინაგან აზრებსა და გრძნობებს, რაც საბოლოოდ იწვევს პიროვნულ ზრდასა და თავისუფლების განცდას.'
      ,artwork: 'ფოტო გალერეა',
      insta: 'ინსტაგრამი: Tamart'
      ,FaceB:'ფეისბუქი: Tamart',
      T1:'ფიფქი',
      T2:'როიალი',
        T3:'დრამი',
        T4:'ჩელო',
        T5:'გიტარა',
        T6:'არფა',
        T7:'ფიგურა',
        T8:'ვაჟას პორტრეტი',
        T9:'გარმონი',
        T10:'მაღალქუსლიანი',
        T11:'ნახატი',
        artworkDef: 'ჩვენი ნამუშევრები',
        Paintings: 'ნახატები',
        Instruments: 'ინსტრუმენტები',
        Other: 'სხვა',
        Extra5: 'ეს არის ჩელო, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
              Extra1: 'ეს არის ვაჟა ფშაველას პორტრეტი, ცნობილი ქართველი პოეტის და მწერლის.',
        Extra2: 'ეს არის ტყავის ნახატი, რომელიც შთაგონებულია გაჭრილი ტყავის ნაწილებით.',
        Extra4: 'ეს არის როიალი, რომელიც სრულიად მომზადებულია ტყავისგან.',
                Extra6: 'ეს არის გიტარა, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra7: 'ეს არის ფიგურა, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra8: 'ეს არის გარმონი, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra9: 'ეს არის მაღალქუსლიანი, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra10: 'ეს არის ფიფქი, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra11: 'ეს არის დრამი, რომელიც მთლიანად ტყავისგანაა დამზადებული.',
        Extra12: 'ეს არის ნახატი, რომელიც მთლიანად ტყავისგანაა დამზადებული.',


    }
  };

  constructor() {
    // Remember previous language (optional)
    const savedLang = localStorage.getItem('lang') as 'en' | 'geo' | null;
    if (savedLang) this.currentLang.next(savedLang);
  }

  switchLang() {
    const newLang = this.currentLang.value === 'en' ? 'geo' : 'en';
    this.currentLang.next(newLang);
    localStorage.setItem('lang', newLang); // remember choice
  }

  getTranslations(lang: 'en' | 'geo') {
    return this.translations[lang];
  }
}
