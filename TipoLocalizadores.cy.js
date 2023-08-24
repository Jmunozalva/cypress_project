describe ('Tipos de Localizadores', ()=>{

    it ('Obtenerlo por tag', ()=>{
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('input')
    }
    )
    
    it ('Obtenerlo por atributo', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('[placeholder="First Name"]')
        }
        )

        it ('Obtenerlo por id', ()=>{
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.get('#firstName')
            }
            )

            it ('Obtenerlo por class', ()=>{
                cy.visit('https://demoqa.com/automation-practice-form')
                cy.get('.mr-sm-2.form-control')
                }
                )

                it ('Usando Contains', ()=>{
                    cy.visit('https://demoqa.com/automation-practice-form')
                    cy.contains('Reading')
                    cy.contains('.header-wrapper','Widgets')
                    }
                    )

                    it ('Usando Parents', ()=>{
                        cy.visit('https://demoqa.com/automation-practice-form')
                        cy.get('[placeholder="First Name"]').parent()
                        cy.get('[placeholder="First Name"]').parents().find('label')
                        cy.get('form').find('label')
                        }
                        )

    }
    )