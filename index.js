const getTaskList = require("./api/get-task-list")
const receiveTask = require("./api/receive-task")
const register = require("./api/register")
const login = require('./api/login')
const { randomString, randomName, randomCookie, randomPhone, randomIPHeader } = require('./helper/random')
const cheerio = require('cheerio')
const getPendingTask = require("./api/get-pending-task")
const submitTask = require("./api/submit-task")
const fs = require('fs')

setImmediate(async () => {
    while (true) {
        try {
            const cookie = randomCookie()
            const name = randomName()
            const phone = randomPhone()
            const ipHeader = randomIPHeader()
            console.log({ cookie })

            let response = await register('PHPSESSID=mtk6io8n7dh96f0t1onl8n65f6', phone, '7478', name, ipHeader)
            console.log(response)
            fs.appendFileSync('./data/accounts.txt', phone + '\n')

            response = await login(cookie, phone, ipHeader)
            console.log(response)

            response = await receiveTask(cookie, '6665', ipHeader)
            console.log(response)
            response = await receiveTask(cookie, '6664', ipHeader)
            console.log(response)
            response = await receiveTask(cookie, '6663', ipHeader)
            console.log(response)

            const html = await getPendingTask(cookie, ipHeader)
            const $ = cheerio.load(html)
            $('.jui_flex_row_center.bai').each(
                async (index, el) => {
                    let mission = $(el).attr('href')
                    mission = mission.split('?m=index&c=taskcon&id=')[1]
                    console.log({ mission })

                    response = await submitTask(cookie, mission, ipHeader)
                    console.log(response)
                })

            await new Promise(resolve => setTimeout(resolve, 1000))
        } catch (error) {
            console.log(error)
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
    }
})