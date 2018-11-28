import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import{registerLocaleData} from '@angular/common';


import{MessageService} from 'primeng/components/common/messageservice';
import{GrowlModule} from 'primeng/growl';
import{CurrencyMaskModule} from 'ng2-currency-mask';
import{DropdownModule} from 'primeng/dropdown';
import{InputTextModule} from 'primeng/inputtext';
import{PanelModule} from 'primeng/panel';
import{ButtonModule} from 'primeng/button'
import{TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    InputTextModule,
    CurrencyMaskModule,
    TableModule,
    PanelModule,
    ButtonModule,
    GrowlModule,
    FormsModule
   
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'pt',
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
