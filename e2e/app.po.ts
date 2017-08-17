<<<<<<< HEAD
import { browser, by, element } from 'protractor';

export class Ng4CapstoneUiPage {
=======
import { browser, element, by } from 'protractor';

export class Ng4CapstonePage {
>>>>>>> 3dd7d9da0d152c85100fc0d4ca43687608c5bbab
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
