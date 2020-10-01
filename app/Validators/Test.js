'use strict'

class Test {
  get rules () {
    return {
      username: 'required|min:3|not_contain:aaa,bbb',
      email: 'required|email'
    }
  }
  get messages() { 
    return {
    'username.required': 'username is required',
    'username.min': 'username must be at least 3 characters long',
    'username.not_contain': 'username can not contain the string: ',
    'email.required': 'email is required',
    'email.email': 'email address must be in a valid format'
    }
  }
  async fails(errorMessages) { 
    this.ctx.session.withErrors(errorMessages[0]).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = Test