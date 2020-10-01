'use strict'

const { test, trait } = use('Test/Suite')('Form Testing')
trait('Test/Browser', {
  args: ['--no-sandbox']
})

test('validate form with error value', async ({ browser }) => {
  const page = await browser.visit('/form')
  await page
    .type('[name="username"]', 'aaa') 
    .type('[name="email"]', 'john@mail.com') 
    .submitForm('form')
  await page.getText('span.error')
}).timeout(0)
