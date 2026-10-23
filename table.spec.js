import{test,expect}from '@playwright/test'
import { log } from 'console';
test('Table',async({page})=>{
    await page.goto('https://letcode.in/table')

    const alldata=await page.locator('//table/tbody/tr/td').allTextContents()
    console.log('alldata:',alldata);

    const rowdata=await page.locator('//table/tbody/tr[3]/td').allTextContents()
    console.log('rowdata:',rowdata);
 
    const columdata=await page.locator('//table/tbody/tr/td[2]').allTextContents()
    console.log('columdata:',columdata);

    const pariculardata=await page.locator('//table/tbody/tr[3]/td[1]').allTextContents()
    console.log('particulardata:',pariculardata);

    const header=await page.locator('//table/thead/tr/th').allTextContents()
    console.log('header:',header);

    

    
    })