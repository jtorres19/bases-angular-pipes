import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {PrimeNgModule} from "./prime-ng/prime-ng.module";
import {SharedModule} from "./shared/shared.module";

import {AppComponent} from './app.component';

import localeEsCL from '@angular/common/locales/es-CL';
import localeItSM from '@angular/common/locales/it-SM';
import {registerLocaleData} from "@angular/common";


registerLocaleData(localeEsCL);
registerLocaleData(localeItSM);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
