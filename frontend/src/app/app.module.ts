import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebRTCChatModule, WebRTCChatComponent } from './webrtc-chat';
import { SharedModule } from './shared';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebRTCChatModule,
    SharedModule
  ],
  entryComponents: [
    WebRTCChatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
