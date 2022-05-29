// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecaoProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-' +tamanho).click()
    cy.get('.button-variable-item-' +cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('dadosFaturamento', (nome, sobreNome, empresa, pais, enderecos, apartamento, numero, cidade,
    estado, cep, telefone, email, senha, comentario) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobreNome)
    cy.get('#billing_company').type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
    cy.get('#billing_address_1').type(enderecos)
    cy.get('#billing_address_1').type(apartamento + numero)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#createaccount').check()
    cy.get('#account_password').type(senha, {log: false})
    cy.get('#order_comments').type(comentario)
    cy.get('#payment_method_cod').click()
    cy.get('#terms').check()
    cy.get('#place_order').click()
});



