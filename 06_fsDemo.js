/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录
 * 7. fs.rename 重命名
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

// 1. 判断服务器上面有没有 upload 目录，没有就创建这个目录
// 2. 找出 html 目录下面的所有的目录，然后打印出来

let fs = require('fs');

fs.stat('upload', (err, stats) => {
    if (err) {
        //没有就创建
        fs.mkdir('upload', (error) => {
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log('创建upload目录成功')
            }
        })
    } else {
        //存在
        //存在目录返回true
        console.log(stats.isDirectory());
        console.log('已有upload目录，你可以做更多操作')
    }

    //读取目录全部文件
    fs.readdir('node_modules', (err, files) => {
        if (err) {
            console.log(err);
            return false;
        } else {
            //判断目录还是文件夹
            console.log(files);

            let filesArr = [];

            (function getFile(i) {
                //循环结束
                if (i == files.length) {
                    //打印所有目录
                    console.log('目录：');5
                    console.log(filesArr);
                    return false;
                }

                //判断目录是文件还是文件夹
                fs.stat('node_modules/' + files[i], (error, stats) => {
                    if (stats.isDirectory()) {
                        filesArr.push(files[i]);
                    }

                    //递归调用
                    getFile(i + 1)
                })
            })(0)
        }
    })

})