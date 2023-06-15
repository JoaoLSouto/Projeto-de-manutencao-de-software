describe('Teste de requerimento', () => {
    it('Preenche e envia o formulário de requerimento', () => {
      cy.visit('/requerimentos')
      cy.get('#inputDisciplina').select('1 - Matemática')
      cy.get('#inputProva').select('A1')
      cy.get('#inputArgumentacao').type('Teste de argumentação')
      cy.get('form').submit()
      cy.contains('Requerimento salvo com sucesso!')
    })
  })