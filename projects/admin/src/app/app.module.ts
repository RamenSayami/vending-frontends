import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './services/inventory.service';
import { SettingsService } from './services/settings.service';
import { SettingsComponent } from './settings/settings.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SettingsComponent,
    LogsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InventoryService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
