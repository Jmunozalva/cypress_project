describe ('Interacción', ()=>{

    it ('Click', ()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')
    }
    )  

    it ('Double Click', ()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')
    }
    ) 

    it ('Right Click', ()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    }
    ) 

    it ('Force Click', ()=>{
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.get('#enableAfter').click({timeout: 0,force:true})
        //cy.get('#enableAfter').click({timeout: 0})
        //cy.get('#rightClickBtn').rightclick()
        //cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')
    }
    ) 

    it ('Click por posición', ()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click().parent().parent().click('topRight')
        cy.get('button').eq(3).click().parent().parent().click('bottomLeft')
        cy.get('button').eq(3).click().parent().parent().click(5,60)
    }
    ) 

    it ('Input type text', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Julio')
        cy.get('#lastName').type('Munoz')
        cy.get('#firstName').type('Julio')
        cy.get('#firstName').type('{selectall}{backspace}')
        cy.get('#firstName').type('otro nombre')
        cy.get('#firstName').clear()
    }
    ) 

    it ('Checkboxes y Radio Buttons', ()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        //cy.get('#gender-radio-1').click()
        //cy.get('#gender-radio-1').click({force:true})
        cy.get('label[for="gender-radio-1"]').click()
        //cy.get('#hobbies-checkbox-1').click()
        //cy.get('#hobbies-checkbox-1').click({force:true})
        //cy.get('#hobbies-checkbox-1').check({force:true})
        //cy.get('#hobbies-checkbox-1').uncheck({force:true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
    }
    ) 

    it ('Extrayendo info', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').as('name')
        cy.get('@name').type('Julio')
        
        cy.get('@name').then(($name)=>{
        expect($name.val()).to.equal('Julio')
        }
        )
        cy.get('@name').invoke('val').should('equal','Julio')
        cy.get('@name').invoke('val').as('nombreGlobal')
    }
    ) 

    it ('Compartir info', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#lastName').type(this.nombreGlobal)
    }
    ) 

    it ('Interactuando con los dropdown(select)', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')   
        cy.get('select').select('Opel').should('have.value', 'opel')
    }
    )

    it.only ('Interactuando con los dropdown(select) Dinamico', function(){
        cy.visit('https://react-select.com/home')   
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox').children().children().contains("Red").click();
    }
    )

    }
    )