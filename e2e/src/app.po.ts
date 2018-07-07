import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageHeading() {
    return element(by.css('span.text-muted')).getText();
  }
}
