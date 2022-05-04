const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/api', {  //도메인 api로 호출
      target: 'http://222.114.141.188:5000/', //통신할 서버의 도메인주소
      changeOrigin: true,
    })
  )
}
