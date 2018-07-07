import { AppPage } from './app.po';
import { fakeAsync } from '@angular/core/testing';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('Your cakes');
  });
});
