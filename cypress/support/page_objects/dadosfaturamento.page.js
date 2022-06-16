class dadosFaturamento {

      addDados2(nome, sobreNome, empresa, pais, endereco, apartamento, cidade, estado, cep, telefone, email, senha, comentario) {
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobreNome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_address_1').type(apartamento)
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

    }
}

export default new dadosFaturamento()