/* eslint-disable */
const axios = require('axios').default

const url_1 = "http://localhost:5011/xxyyzz"
const url_2 = "https://api.42-1.xyz/xxyyzz"

const url = url_2

const ax_get = async ({path}) => {
    let u = url + "" + path
    return await (await axios.get(u)).data
}

const ax_post = async ({path, params}) => {
    let u = url + "" + path
    return await (await axios.post(u, params)).data
}


export default {
    ax_get,
    ax_post
}