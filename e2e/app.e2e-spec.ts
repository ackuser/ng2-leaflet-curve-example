import { Ng2LeafletExamplePage } from './app.po';

describe('ng2-leaflet-example App', () => {
  let page: Ng2LeafletExamplePage;

  beforeEach(() => {
    page = new Ng2LeafletExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
