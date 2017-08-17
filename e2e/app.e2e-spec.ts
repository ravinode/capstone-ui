<<<<<<< HEAD
import { Ng4CapstoneUiPage } from './app.po';

describe('ng4-capstone-ui App', () => {
  let page: Ng4CapstoneUiPage;

  beforeEach(() => {
    page = new Ng4CapstoneUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
import { Ng4CapstonePage } from './app.po';

describe('ng4-capstone App', function() {
  let page: Ng4CapstonePage;

  beforeEach(() => {
    page = new Ng4CapstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 3dd7d9da0d152c85100fc0d4ca43687608c5bbab
  });
});
