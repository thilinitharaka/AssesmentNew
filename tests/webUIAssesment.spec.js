const {test, expect} = require('@playwright/test')
 
test('Navigate to the herokuapp website and check the fist check box', async ({page}) =>{

//Navigate to the https://the-internet.herokuapp.com website
await page.goto('https://the-internet.herokuapp.com')

//Assert the title
await expect(page).toHaveTitle('The Internet')

//await page.pause()

//Click on Checkboxes link

await page.locator("//*[@id='content']/ul/li[6]/a").click();

//Check the first check box
await page.locator('//*[@id="checkboxes"]/input[1]').click();

})

test('Navigate to the herokuapp website and enter value to the Inputs', async ({page}) =>{

    //Navigate to the https://the-internet.herokuapp.com website
    await page.goto('https://the-internet.herokuapp.com')
    
    //Assert the title
    await expect(page).toHaveTitle('The Internet')
    
    //await page.pause()
    
    //Click on Inputs link
    await page.locator("//*[@id='content']/ul/li[27]/a").click();
    
    //Click on input text box
    await page.locator("//*[@id='content']/div/div/div/input").click();

    // Enter value 2 to the inut text box
    await page.locator("//*[@id='content']/div/div/div/input").fill("2"); 
 
    
    })

    test('Navigate to the herokuapp website and verify the text in A/B testing', async ({page}) =>{

        //Navigate to the https://the-internet.herokuapp.com website
        await page.goto('https://the-internet.herokuapp.com')
        
        //Assert the title
        await expect(page).toHaveTitle('The Internet')
        
        //await page.pause()
        
        //Click on A/B Testing link
        await page.locator("//*[@id='content']/ul/li[1]/a").click();
        
        //Get the text from paragraph
        const text1 = await page.locator("//*[@id='content']/div/h3").textContent()
        
        //Assert the head text contains A/B
         expect(text1.includes("A/B")).toBeTruthy()
        })

         test('Navigate to the herokuapp website and verify Add/Remove Elements functionality', async ({page}) =>{

            //Navigate to the https://the-internet.herokuapp.com website
            await page.goto('https://the-internet.herokuapp.com')
            
            //Assert the title
            await expect(page).toHaveTitle('The Internet')
            
            //await page.pause()
            
            //Click on Add/Remove elements link
            await page.locator("//*[@id='content']/ul/li[2]/a").click();
            
            //Click on Add Element button
            await page.locator("//*[@id='content']/div/button").click();

            //Click onn Delete button
            await page.locator("//*[@id='elements']/button").click();

            //Verify that the delete button is not display in the page
            await page.locator("//*[@id='elements']/button").isVisible (false);
            })

            test('Navigate to the herokuapp website and select a value from dropdown', async ({page}) =>{

                //Navigate to the https://the-internet.herokuapp.com website
                await page.goto('https://the-internet.herokuapp.com')
                
                //Assert the title
                await expect(page).toHaveTitle('The Internet')
                
                //await page.pause()

                //Click on Dropdown link
                await page.locator("//*[@id='content']/ul/li[11]/a").click();
                
                //Select the first option from the dropdown
                await page.locator("//*[@id='dropdown']").selectOption({label:"Option 1"});
                
                //Get the text of selected option
                const optionText = await page.locator("//*[@selected='selected']").textContent()
 
                //Assert that the first option is selected
                expect(optionText).toContain("Option 1")
    
                }) 

