import { NgrxStateManagementPage } from './app.po';

describe('ngrx-state-management App', function() {
  let page: NgrxStateManagementPage;

  beforeEach(() => {
    page = new NgrxStateManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
