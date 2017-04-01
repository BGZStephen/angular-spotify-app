import { AngularSpotifyAppPage } from './app.po';

describe('angular-spotify-app App', () => {
  let page: AngularSpotifyAppPage;

  beforeEach(() => {
    page = new AngularSpotifyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
