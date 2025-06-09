const Axios = require('axios').default
const { HttpProxyAgent } = require('http-proxy-agent')
const { HttpsProxyAgent } = require('https-proxy-agent')

const axios = Axios.create({
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
    withCredentials: true,
  },
  maxRedirects: 2,
  httpAgent: new HttpProxyAgent('http://Clash:JEpfb5tb@192.168.0.6:7890'),
  httpsAgent: new HttpsProxyAgent('http://Clash:JEpfb5tb@192.168.0.6:7890'),
  proxy: false,
})

axios.interceptors.request.use((config) => {
  const url = new URL(config.url, config.baseURL || 'http://localhost')
  if (config.params) {
    for (const [key, value] of Object.entries(config.params)) {
      url.searchParams.append(key, value)
    }
  }
  console.log(`[Axios] 请求完整 URL: ${url.href}`)
  return config
})

module.exports = axios
