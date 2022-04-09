# programmer-go

## 环境初始化配置
如果没有yarn环境的话，使用以下命令进行工具安装
```shell
npm install --global yarn
```
注意可能需要sudo提升权限

## Project setup
```
yarn install
```

安装过程中如果出现类似以下的提示
```
The engine "node" is incompatible with this module. Expected version ">=12". Got "10.15.3"
```
不妨使用以下命令解决
```
 yarn config set ignore-engines true
```


### Compiles and hot-reloads for development
```
yarn serve
```

如果是linux启动的时候可能会出现
```
Error: ENOSPC: System limit for number of file watchers reached
```
报错提示，这个主要是linux系统的限制导致的问题，需要设置` fs.inotify.max_user_watches` 这个参数。

#### 解决方法
执行：vim /etc/sysctl.conf，添加如下内容：

fs.inotify.max_user_watches=524288

输入：wq

在命令行执行：sysctl -p

重新执行：yarn serve，没有报错了。


### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 提交规范参考

https://juejin.cn/post/7078943088475013150/

# 启动失败
如果在某些情况下启动失败，如出现
```js
internal/modules/cjs/loader.js:883
  throw err;
  ^
```
或者
```js
 INFO  Starting development server...
 ERROR  ValidationError: Progress Plugin Invalid Options
        
        options should NOT have additional properties
        options should NOT have additional properties
        options should NOT have additional properties
        options should pass "instanceof" keyword validation
        options should match exactly one schema in oneOf
```
或者
```js
 ERROR  TypeError: transpileDependencies.map is not a function
TypeError: transpileDependencies.map is not a function
    at genTranspileDepRegex (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-plugin-babel/index.js:6:38)
    at module.exports (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-plugin-babel/index.js:22:29)
    at /media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-service/lib/Service.js:82:9
    at Array.forEach (<anonymous>)
    at loadedCallback (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-service/lib/Service.js:80:20)
    at Service.init (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-service/lib/Service.js:97:14)
    at Service.run (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-service/lib/Service.js:247:16)
    at Object.<anonymous> (/media/yerikyu/storage2/programmer-go-front/node_modules/@vue/cli-service/bin/vue-cli-service.js:37:9)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
```
大概率是由于`node_modules`包不一致导致的，优先使用`yarn serve`命令解决问题