const axios = require('axios').default

const url_1 = "http://localhost:5011/xxyyzz"
const url_2 = "http://core.stupidarnob.com/xxyyzz"

const url = url_1

const ax_get = async ({path}) => {
    let u = url + "" + path
    return await (await axios.get(u)).data
}



const ax_post = async ({path, params}) => {
    let u = url + "" + path
    return await (await axios.post(u, params)).data
}


module.exports = {
    ax_get,
    ax_post
}