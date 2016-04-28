export class NammaVoicePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('namma-voice-app p')).getText();
  }
}
