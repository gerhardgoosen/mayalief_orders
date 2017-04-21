import { MayaliefOrdersPage } from './app.po';

describe('mayalief-orders App', function() {
  let page: MayaliefOrdersPage;

  beforeEach(() => {
    page = new MayaliefOrdersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
