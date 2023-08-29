import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-languages',
  templateUrl: './switch-languages.component.html',
  styleUrls: ['./switch-languages.component.css']
})
export class SwitchLanguagesComponent {

  options = [
    {value: 'en', display: 'English'},
    {value: 'es', display: 'Español'}
  ];

  constructor(private translate: TranslateService) {}

  onChange = (event: Event) => {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
  }

}
