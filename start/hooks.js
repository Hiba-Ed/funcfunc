const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Validator = use('Validator')
  const notContain = async (data, field, message, args, get) => {
    const value = get(data, field).toLowerCase()
    if (!value) {
      return
    }
    args.some(function(arg) {
      if (value.includes(arg.toLowerCase())) {
        throw `${message} ${arg}` 
      }
    })
  }
  Validator.extend('notContain', notContain)
})
