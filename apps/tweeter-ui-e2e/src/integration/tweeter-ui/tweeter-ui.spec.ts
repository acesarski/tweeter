describe('tweeter-ui: TweeterUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tweeterui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to tweeter-ui!');
    });
});
