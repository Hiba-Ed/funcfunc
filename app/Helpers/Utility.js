module.exports = {
  passwordChecker(value) {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.exec(value) === null) { 
      return { error: 'Password unallowed' }
    }
    return { success: 'Password allowed' }
  } 
}
