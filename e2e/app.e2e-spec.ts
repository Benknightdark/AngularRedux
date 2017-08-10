import { AngreduxPage } from './app.po';

describe('angredux App', () => {
  let page: AngreduxPage;

  beforeEach(() => {
    page = new AngreduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
