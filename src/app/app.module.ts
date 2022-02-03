import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpParams } from "@angular/common/http";
import  { PdfViewerModule }  from  'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeleverserComponent } from './televerser/televerser.component';
import { AfficherFacturePDFComponent } from './une-facture/afficher-facture-pdf/afficher-facture-pdf.component';
import { ToComptableComponent } from './une-facture/to-comptable/to-comptable.component';
import { UneFactureComponent } from './une-facture/une-facture.component';
import { DecodageComponent } from './une-facture/decodage/decodage.component';
import { SafePipe } from './sanitizer.pipe';
import { ExportToCsv } from 'ts-export-to-csv';




@NgModule({
  declarations: [
    AppComponent,
    TeleverserComponent,
    AfficherFacturePDFComponent,
    ToComptableComponent,
    UneFactureComponent,
    DecodageComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 }
