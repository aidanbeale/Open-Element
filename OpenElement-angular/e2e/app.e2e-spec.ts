import { OpenElementPage } from './app.po';

describe('open-element App', () => {
  let page: OpenElementPage;

  beforeEach(() => {
    page = new OpenElementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
