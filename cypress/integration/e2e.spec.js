/// <reference types="cypress" />



describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    const { faker } = require('@faker-js/faker');

   
       
  
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de E2E usando dados fakes', () => {
        
        
        //Seleção dos produtos
        cy.get('[class="product-block grid"]').contains('Atlas Fitness Tank').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

        //caminho do checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        // cadastro de dados e fechamento da compra
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type()
        cy.get('#billing_company').type('DC')
        cy.get('#select2-billing_country-container').click().type('Brasil' + '{enter}')
        cy.get('#billing_address_1').type('Av dos Bobos')
        cy.get('#billing_address_1').type('Apartamento 312')
        cy.get('#billing_city').type('Central City')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro' + '{enter}')
        cy.get('#billing_postcode').type('24558321')
        cy.get('#billing_phone').type('995875524')
        cy.get('#billing_email').type()
        cy.get('#createaccount').check()
        cy.get('#account_password').type()
        cy.get('#order_comments').type('esquina com a casa do lobo mau')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });

   


})