import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NammaVoiceApp} from '../app/namma-voice.component';

beforeEachProviders(() => [NammaVoiceApp]);

describe('App: NammaVoice', () => {
  it('should have the `defaultMeaning` as 42', inject([NammaVoiceApp], (app: NammaVoiceApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NammaVoiceApp], (app: NammaVoiceApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

