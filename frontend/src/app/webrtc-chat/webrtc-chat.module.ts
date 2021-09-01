import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { SharedModule } from '../shared';
import { WebRTCChatComponent } from './webrtc-chat.component';

@NgModule({
  declarations: [
    WebRTCChatComponent
  ],
  imports: [
    MatGridListModule,
    CommonModule
  ],
  exports: [
    WebRTCChatComponent
  ]
})
export class WebRTCChatModule { }