import { TestPage1 } from './page1.po';

describe('Page1', () => {
  let page: TestPage1;

  beforeEach(() => {
    page = new TestPage1();
  });

  it('should display message saying the name of ionic starter', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ionic Menu Starter');
  });
});
