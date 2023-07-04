describe('Teste no Cypress', () => {
    it('Visita a página inicial e verifica o título', () => {
      // Visita a página inicial
      cy.visit('hhttp://grupoassociativogasp.com.br/gestor_site/login');
  
      // Verifica se o título da página é correto
      cy.title().should('eq', 'Título da Página');
  
      // Realiza outras asserções e interações com a página
      // ...
  
      // Exemplo de clique em um botão
      cy.get('.botao').click();
  
      // Realiza asserções sobre o resultado do clique
      cy.get('.resultado').should('contain', 'Ação realizada com sucesso!');
    });
  });