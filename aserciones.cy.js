describe ('Aserciones', ()=>{

beforeEach( () => {

    cy.visit('https://demoqa.com/automation-practice-form')

}
)

    it ('Aserciones', ()=>{
        //cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('include','demoqa.com')
        //cy.get('#firstName').should('be.visible').should('have.attr','placeholder','First Name')
        cy.get('#firstName').should('be.visible').and('have.attr','placeholder','First Name')
        }
        )

        it ('Asercion 2', ()=>{
            //cy.visit('https://demoqa.com/automation-practice-form')
            cy.url().should('include','demoqa.com')
            cy.get('#firstName').then((element) =>{
                expect(element).to.be.visible
                expect(element).to.have.attr('placeholder','First Name')
            }
            )

            }
            )

            it ('Asercion 3', ()=>{
                //cy.visit('https://demoqa.com/automation-practice-form')
                cy.url().should('include','demoqa.com')
                cy.get('#firstName').then((element) =>{
                    assert.equal(element.attr('placeholder'),'First Name')
                }
                )
    
                }
                )

}
)