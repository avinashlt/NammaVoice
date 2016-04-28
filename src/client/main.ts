import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {NammaVoiceApp} from './app/namma-voice.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(NammaVoiceApp);
