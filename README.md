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
