//引入http模块
var http = require('http');

//http 模块创建服务
/**
 * req 获取url信息（request）
 * res 浏览器返回响应信息（response）
 *  */
http.createServer(function (req, res) {
    //设置HTTP头部 状态码200 文件类型HTML 字符编码UTF-8
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })

    //页面中打印
    res.write('<h1 style="text-align:center;">Hello NodeJs</h1>')

    //响应结束
    res.end()
}).listen(3000); //监听端口