import { NammaVoicePage } from './app.po';

describe('namma-voice App', function() {
  let page: NammaVoicePage;

  beforeEach(() => {
    page = new NammaVoicePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('namma-voice Works!');
  });
});
