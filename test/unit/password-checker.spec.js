'use strict'

const { test } = use('Test/Suite')('Password Checker')
const Utility = use('Utility')

test('checking invalid password', async ({ assert }) => {
  const response = Utility.passwordChecker('adsasdas')
  assert.deepEqual(response, {
    error: 'Password unallowed'
  })
})
test('checking valid password' , async( {assert} )=>{
  const response = Utility.passwordChecker('goodpass123')
  assert.deepEqual(response, {
    success: 'Password allowed' 
  })
})
