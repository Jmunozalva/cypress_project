describe ('Navegación', ()=>{

it ('Navegar Primer Pagina', ()=>{
cy.visit('https://www.platzi.com')
}
)

it ('Recargar Pagina', ()=>{
    cy.reload()
    }
    )


    it ('Recargar Pagina forzada', ()=>{
        cy.visit('https://www.google.com')
        cy.reload(true)
        }
        )

        it.only ('Volver atrás', ()=>{
            cy.visit('https://www.google.com')
            cy.visit('https://www.google.com/search?q=platzi&rlz=1C1CHBF_esCL965CL966&oq=pla&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg5MgYIARBFGDsyCQgCECMYJxiKBTINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDINCAUQABiDARixAxiABDIKCAYQABixAxiABDINCAcQABiDARixAxiABDINCAgQABiDARixAxiABDINCAkQABiDARixAxiABNIBDzExNzUyMjU4NDFqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8')
            cy.go('back')
            cy.go('forward')
            }
            )
}
)