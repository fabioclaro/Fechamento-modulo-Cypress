/// <reference types="cypress" />
//const {faker} = require('@faker-js/faker');
var faker = require('faker-br');
import dadosFaturamento from '../support/page_objects/dadosfaturamento.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Teste end 2 end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('produtos')

    })

    it('Deve fazer um pedido na loja Ebac Shop de E2E usando dados fakes', () => {
        var quantidade = 4
        //Seleção dos produtos
        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

        //caminho do checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        // cadastro de dados e fechamento da compra
        cy.get('#billing_first_name').type(faker.name.firstName())
        cy.get('#billing_last_name').type(faker.name.lastName())
        cy.get('#billing_company').type('DC')
        cy.get('#select2-billing_country-container').click().type('Brasil' + '{enter}')
        cy.get('#billing_address_1').type('Rua dos bobos')
        cy.get('#billing_address_1').type('Apartamento 312')
        cy.get('#billing_city').type('Central City')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro' + '{enter}')
        cy.get('#billing_postcode').type('24558321')
        cy.get('#billing_phone').type('995875524')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#createaccount').check()
        cy.get('#account_password').type(faker.internet.password(), { log: false })
        cy.get('#order_comments').type('esquina com a casa do lobo mau')
        cy.get('#payment_method_cod').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });

    it('Deve fazer um pedido na loja Ebac Shop de E2E comandos customizado', () => {
        var quantidade = 4
        let emailfaker1 = faker.internet.email()

        //Seleção dos produtos
        cy.selecaoProdutos('Aero Daily Fitness Tee', 'L', 'Brown', quantidade)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

        //caminho do checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        // cadastro de dados e fechamento da compra
        cy.dadosFaturamento('Baby', 'Girl', 'Barbie', 'Brasil', 'Av das rosas', 'bloco rosa', '3', 'pink Citty', 'Amazonas', '25363656', '21669855847',
            emailfaker1, 'barbie@rosa', 'perto da esquina vermelha')

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de E2E Pages Objects', () => {
        var quantidade = 4
        let nome = faker.name.firstName()
        let sobreNome = faker.name.lastName()
        let email = faker.internet.email()
        let senha = faker.internet.password()

        //Seleção dos produtos
        cy.selecaoProdutos('Aero Daily Fitness Tee', 'L', 'Brown', quantidade)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

        //caminho do checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        // cadastro de dados e fechamento da compra
        dadosFaturamento.addDados(nome, sobreNome, email, senha)

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });

    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 4

        //Seleção dos produtos
        cy.selecaoProdutos('Argus All-Weather Tank', 'XS', 'Gray', quantidade)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')

        //caminho do checkout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        // cadastro de dados e fechamento da compra
        dadosFaturamento.addDados2(dadosEndereco[1].nome,
            dadosEndereco[1].sobreNome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].apartamento,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
            dadosEndereco[1].senha,
            dadosEndereco[1].comentario,
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})