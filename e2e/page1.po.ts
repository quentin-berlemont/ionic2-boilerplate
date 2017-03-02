import { browser, element, by } from 'protractor';

export class TestPage1 {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ion-content h3')).getText();
  }
}
