# 个人博客

> 这是一个为了实践学到的各种知识而搭建的博客，包括前端和后台开发，由于项目量较大，将会不定时进行更新

## 技术栈
vue + express + mongoDB

## 设计目标
### 功能目标
- [x] 个人信息模块
- [x] 管理员登录模块
- [x] 文章模块
- [x] 分页模块
- [x] 评论模块
- [ ] 留言模块
- [ ] 个人信息模块
- [ ] 兴趣模块
- [ ] 归档模块
### 技术目标
#### 前端方面
- [x] 修改webpack默认设置，添加后台项目路径
- [ ] 使用VUE-SSR服务端渲染
- [ ] 使用VUE路由懒加载，参考文档  http://www.jianshu.com/p/97f72141bd89
- [ ] 使用VUE异步组件实现组件懒加载 
#### 后台方面
- [x] 使用promise进行异步流程控制
- [ ] 使用async/await进行异步流程控制
- [ ] 使用session保存用户登录状态并作用户权限过滤

## 项目结构
```
.
├── server                                      // 服务端代码
│   ├── controller                              // 逻辑处理层
│   ├── models                                  // 数据表结构层
│   ├── api.js                                  // 服务端的API接口
├── src                                         // 客户端代码
│   ├── assets                                  // 公共资源
│   ├── components                              // 组件           
│   ├── global                                  // 全局方法和样式
│   ├── router                                  // 路由控制
│   ├── view                                    // 引用的插件
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件
├── index.html                                  // 入口html文件
├── server.js                                   // 服务端入口文件
.

```

## 安装步骤

``` bash
# 安装依赖
npm install

# 运行前端开发环境
npm run dev

# 打包前端程序
npm run build

# 运行后台服务器
node server
```