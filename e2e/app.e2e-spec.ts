import { FitnessAppPage } from './app.po';

describe('fitness-app App', () => {
  let page: FitnessAppPage;

  beforeEach(() => {
    page = new FitnessAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
