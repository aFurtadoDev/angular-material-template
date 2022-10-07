import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/shared/modules/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginatorI18n } from './core/utils/components/data-table/paginator-translate';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AppTranslationService } from './core/services/app-translation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularMaterialModule,
    AppRoutingModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useClass: TranslateLanguageLoader
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    AppTranslationService,
    {
      provide: MatPaginatorIntl,
      deps: [AppTranslationService],
      useFactory: (translateService: AppTranslationService) =>
        new PaginatorI18n(translateService).getPaginatorIntl(),
    },
    // { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
