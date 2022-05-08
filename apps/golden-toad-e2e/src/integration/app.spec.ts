import { getGreeting } from '../support/app.po';

describe('golden-toad', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome golden-toad');
  });
});
