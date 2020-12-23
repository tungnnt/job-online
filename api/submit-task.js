const axios = require('axios')

module.exports = async (cookie, mission, ipHeader) => {
    const config = {
        method: 'post',
        url: 'https://www.jobonline.top/?m=index&c=taskcon&id=' + mission,
        headers: {
            'authority': 'www.jobonline.top',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'referer': 'https://www.jobonline.top/?m=index&c=tasklog',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': cookie,
            ...ipHeader
        }
    };

    const response = await axios(config)
    return response.data
}
