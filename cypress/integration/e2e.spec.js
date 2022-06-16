/// <reference types="cypress" />
import dadosFaturamento from '../support/page_objects/dadosfaturamento.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Teste end 2 end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 2

        cy.selecaoProdutos('Argus All-Weather Tank', 'XS', 'Gray', quantidade)

        dadosFaturamento.addDados2(dadosEndereco[0].nome,
            dadosEndereco[0].sobreNome, dadosEndereco[0].empresa, dadosEndereco[0].pais, dadosEndereco[0].endereco,
            dadosEndereco[0].apartamento, dadosEndereco[0].cidade, dadosEndereco[0].estado, dadosEndereco[0].cep,
            dadosEndereco[0].telefone, dadosEndereco[0].email, dadosEndereco[0].senha, dadosEndereco[1].comentario,
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 2

        cy.selecaoProdutos('Augusta Pullover Jacket', 'XS', 'Blue', quantidade)

        dadosFaturamento.addDados2(dadosEndereco[1].nome,
            dadosEndereco[1].sobreNome, dadosEndereco[1].empresa, dadosEndereco[1].pais, dadosEndereco[1].endereco,
            dadosEndereco[1].apartamento, dadosEndereco[1].cidade, dadosEndereco[1].estado, dadosEndereco[1].cep,
            dadosEndereco[1].telefone, dadosEndereco[1].email, dadosEndereco[1].senha, dadosEndereco[1].comentario,
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 2

        cy.selecaoProdutos('Ajax Full-Zip Sweatshirt', 'L', 'Red', quantidade)

        dadosFaturamento.addDados2(dadosEndereco[2].nome,
            dadosEndereco[2].sobreNome, dadosEndereco[2].empresa, dadosEndereco[2].pais, dadosEndereco[2].endereco,
            dadosEndereco[2].apartamento, dadosEndereco[2].cidade, dadosEndereco[2].estado, dadosEndereco[2].cep,
            dadosEndereco[2].telefone, dadosEndereco[2].email, dadosEndereco[2].senha, dadosEndereco[2].comentario,
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

    it('Deve fazer um pedido na loja Ebac Shop de E2E ', () => {
        var quantidade = 2

        cy.selecaoProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'S', 'Black', quantidade)

        dadosFaturamento.addDados2(dadosEndereco[3].nome,
            dadosEndereco[3].sobreNome, dadosEndereco[3].empresa, dadosEndereco[3].pais, dadosEndereco[3].endereco,
            dadosEndereco[3].apartamento, dadosEndereco[3].cidade, dadosEndereco[3].estado, dadosEndereco[3].cep,
            dadosEndereco[3].telefone, dadosEndereco[3].email, dadosEndereco[3].senha, dadosEndereco[3].comentario,
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})