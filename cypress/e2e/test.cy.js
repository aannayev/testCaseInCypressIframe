describe("forms tests", () => {
    beforeEach(() => {
      cy.visit("ru/blog/feedback-form-template");
    });
    it('should test the form inside iframe by visiting the iframe URL directly', () => {
      
    //   
       
       cy.wait(2000);
           cy.scrollTo(0, 700);
       cy.get('#ttgraf-33')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap)
       .then(($iframeBody)=>{

        console.log($iframeBody[0].innerHTML);
        cy.contains(/Форма обратной связи для сайта/i)
        const inputElements = $iframeBody[0].querySelectorAll('textarea');
     
        console.log(inputElements);
        if (inputElements.length > 0) {
          
            cy.wrap(inputElements[0]).type('This is a test message');
          }

          cy.wrap($iframeBody)
          .find('input') 
          .eq(0)        
          .type('Hello');
  
        cy.wrap($iframeBody)
          .find('input') 
          .eq(1)         
          .type('second@example.com'); 
  
        cy.wrap($iframeBody)
          .find('input') 
          .eq(2)        
          .type('98787987'); 
  
        
        cy.wrap($iframeBody)
          .find('#downshift-0-toggle-button') 
          .click(); 
  
        
        cy.wrap($iframeBody)
          .contains(/заказ/i) 
          .click();
        
        cy.wrap($iframeBody)
          .find('textarea')  
          .type('hello world'); 
  
      
        cy.wrap($iframeBody)
          .find('button')  
          .contains(/Отправить/i)
          .click(); 
  
      
        cy.wrap($iframeBody)
          .contains('Благодарим за обращение!')
          .should('be.visible'); 


        //   cy.wrap($iframeBody)
        //   .find('textarea')  // Find all textarea elements inside the iframe
        //   .first()            // Choose the first textarea
        //   .type('This is a test message');
        // cy.get('input').eq(0).type('Hello');
        // cy.get('input').eq(1).type('second@example.com');
        // cy.get('input').eq(2).type('98787987');
        // cy.get('#downshift-0-toggle-button').click()
        // cy.contains(/заказ/i).click();
        // cy.get('textarea').type('hello wrold');
        // cy.get('button').contains(/Отправить/i).click();
        // cy.contains('Благодарим за обращение!').should('be.visible');
       })
    //    .its('body').find('form')
//        .should('be.visible')
//        .should('not.be.empty')
//        .then(($iframe) => {
//            const $body = $iframe.contents().find('body')
  
//    cy.wrap($body)
//        .find('input')
      
  
//    })

        // cy.get('input').eq(0).type('Hello');
        // cy.get('input').eq(1).type('second@example.com');
        // cy.get('input').eq(2).type('98787987');
        // cy.get('#downshift-0-toggle-button').click()
        // cy.contains(/заказ/i).click();
        // cy.get('textarea').type('hello wrold');
        // cy.get('button').contains(/Отправить/i).click();
        // cy.contains('Благодарим за обращение!').should('be.visible');
        
      });

    // it.only('usung iframe frameowrk',()=>{
    //     cy.wait(2000);
    //     cy.scrollTo(0, 700);

    //     cy.get('#ttgraf-33')
    //     .should('be.visible')
    //     // .should('not.be.empty')
    //     .then(($iframe) => {
    //         const $body = $iframe.contents().find('body')})



    // })
    
  
    // it("Test subsribe form", () => {
    //     cy.wait(2000);
    //     cy.scrollTo(0, 700);

    //     cy.frameLoaded('#ttgraf-33');
    // });
        // cy.get('#__next').contains(/Шаблон формы обратной связи для сайта/i);
        // cy.get('.raw-html-embed iframe').first().then(($iframe) => {
        //     // Now you can interact with elements inside the iframe
        //     const body = $iframe.contents().find('body');
        //     cy.wrap(body).find('button').click();
        //     // cy.wrap(iframeBody).find('button[type="submit"]').click();
        //   });

        // cy.frameLoaded('#ttgraf-33');
        // cy.get('#ttgraf-33').its('0.contentDocument').should('exist').then((iframeDoc)=>{
        //     cy.wrap(iframeDoc).find('input');
            
        // })
    //   cy.contains(/testing forms/i);
    //   cy.getDataTest("subscribe-form").find("input").as('subscribe-input')
  
    //   cy.get('@subscribe-input').type("hell@gmail");
    //   cy.contains(/Invalid email: /i).should("not.exist");
    //   cy.getDataTest("subscribe-button").click();
    //   cy.contains(/Invalid email: /i).should("exist");
    //   cy.wait(3000);
    //   cy.contains(/Invalid email: /i).should("not.exist");
    
  });
  