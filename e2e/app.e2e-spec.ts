import { Ng4CapstoneUiPage } from './app.po';

describe('ng4-capstone-ui App', () => {
  let page: Ng4CapstoneUiPage;

  beforeEach(() => {
    page = new Ng4CapstoneUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
