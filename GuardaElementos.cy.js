describe ('Guargando elementos', ()=>{

    it ('Repetición', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')

        cy.get('[placeholder="First Name"]').parents('form').then((form) =>{

        const inputs = form.find('input')
        const divs = form.find('div')
        const labels = form.find('label')

        expect (inputs.length).to.eq(15)

        console.log ('soy la longitud',inputs.length)

        //debugger

        //cy.get('form').find('label')

        cy.task('log',inputs.length)
        cy.get('[placeholder="First Name"]').then(console.log)

        }
        )

    }
        )

    }
    )