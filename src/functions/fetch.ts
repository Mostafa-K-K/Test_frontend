let HOST_URL = process.env.REACT_APP_HOST_URL

export async function fetchData({
    method = 'POST',
    apiName,
    reqBody = {}
}: any) {

    let result = {}
    let url = `${HOST_URL}/${apiName}`

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    let body = JSON.stringify(reqBody)
    let requests = { method, headers, body }

    try {
        let response = await fetch(url, requests)
        result = await response.json()
        return result
    }
    catch (e) {
        console.log('error', e)
    }
}
