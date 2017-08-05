import { Ng4CapstonePage } from './app.po';

describe('ng4-capstone App', function() {
  let page: Ng4CapstonePage;

  beforeEach(() => {
    page = new Ng4CapstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
