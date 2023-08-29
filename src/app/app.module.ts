import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwitchLanguagesComponent } from './components/switch-languages/switch-languages.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchLanguagesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}
