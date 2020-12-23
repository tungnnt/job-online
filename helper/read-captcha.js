const Client = require('@infosimples/node_two_captcha')

const API_KEY = 'df9c80fd7b7ff94f9703c3b2049e084c'

module.exports = async () => {
    let client = new Client(API_KEY, {
        timeout: 60000,
        polling: 5000,
        throwErrors: false
    });

    const url = `http://www.vilike666.com/api/Account/code?code_rand=${epoch}`

    return new Promise((resolve, reject) => {
        client.decode({
            url: url
        }).then(function (response) {
            resolve({ code: response.text, epoch })
        }).catch(error => {
            console.log("[ERROR SOLVE CAPTCHA]", error)
            reject(error.message)
        })

    })
}