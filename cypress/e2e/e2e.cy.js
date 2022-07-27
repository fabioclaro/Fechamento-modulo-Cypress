/// <reference types="cypress" />
const dadosEndereco = require('../fixtures/endereco.json')
import dadosFaturamento from '../support/page_objects/dadosfaturamento.page'


describe('Teste end 2 end - Fluxo de pedido', () => {
    beforeEach(() => {
       cy.visit('minha-conta')
    })

    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 2

        cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
        })

        cy.selecaoProdutos('Hyperion Elements Jacket', 'XS', 'Green', quantidade)
        cy.selecaoProdutos('Jupiter All-Weather Trainer', 'XS', 'Blue', quantidade)
        cy.selecaoProdutos('Ingrid Running Jacket', 'L', 'Orange', quantidade)
        dadosFaturamento.addDados2(dadosEndereco[2].nome,
        dadosEndereco[2].sobreNome, dadosEndereco[2].empresa, dadosEndereco[2].pais, dadosEndereco[2].endereco,
        dadosEndereco[2].apartamento, dadosEndereco[2].cidade, dadosEndereco[2].estado, dadosEndereco[2].cep,
        dadosEndereco[2].telefone, dadosEndereco[2].email, dadosEndereco[2].senha, dadosEndereco[2].comentario)
       cy.checkout()
       cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
       })
})