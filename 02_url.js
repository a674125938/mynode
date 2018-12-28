//引入url模块
var url = require('url');
//引入http
var http = require('http');
//用http创建服务
/**
 * req 获取url信息（request）
 * res 浏览器返回响应信息（response）
 *  */
http.createServer(function (req, res) {
    // 获取服务器请求
    /**
     * 访问地址是：http://localhost:3000/?userName=jsfan&userAge=27
     * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
     * /  ?userName=jsfan&userAge=27
     * /  /favicon.ico
     * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
     */
    if (res.url != '/favicon.ico') {
        //使用url的parse方法
        /**
         * parse 方法需要两个参数：
         * 第一个参数是地址
         * 第二个参数是 true 的话表示把 get 传值转换成对象
         */
        var result = url.parse(req.url, true);
        console.log(result);
        /**
         * Url {
         *   protocol: null,
         *   slashes: null,
         *   auth: null,
         *   host: null,
         *   port: null,
         *   hostname: null,
         *   hash: null,
         *   search: '?userName=jsfan&userAge=27',
         *   query: { userName: 'jsfan', userAge: '27' },
         *   pathname: '/',
         *   path: '/?userName=jsfan&userAge=27',
         *   href: '/?userName=jsfan&userAge=27' }
         */
        console.log(result.query.userName);
        console.log(result.query.userAge);
    }
    //设置http头部
    res.write(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    })
    res.write('<h1 style="text-align:center;">Thanks for Watch</h1>')

    res.end();

}).listen(3000)