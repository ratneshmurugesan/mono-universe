describe('design-system-core: DesignSystemCore component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=designsystemcore--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DesignSystemCore!');
    });
});
