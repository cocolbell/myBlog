# 个人博客

> 这是一个为了实践学到的各种知识而搭建的博客，包括前端和后台开发，由于项目量较大，将会不定时进行更新

## 技术栈
Vue + NodeJS + Express + MongoDB

## 截图
[![blogdbf29.md.png](https://miao.su/images/2018/03/09/blogdbf29.md.png)](https://miao.su/image/dedj5)
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
- [x] 使用SASS统一管理CSS
- [ ] 使用VUE-SSR服务端渲染
- [x] 利用webpack的代码分割实现页面按需加载（路由懒加载）
- [ ] axios统一错误处理 
- [ ] 使用VUEX（待定，看项目实际需求）

#### 后台方面
- [x] 使用promise进行异步流程控制
- [x] 利用中间件封装http response 的方法，方便统一服务端返回值格式
- [x] 利用中间件封装token相关方法，实现利用token保持登录状态和权限过滤
- [ ] 使用async/await进行异步流程控制
- [ ] node发送邮件，订阅后不定时推送信息
- [ ] 数据库备份

## 项目结构
```
.
├── server                                      // 服务端代码
│   ├── controller                              // 逻辑处理层
│   ├── models                                  // 数据表结构层
│   ├── api.js                                  // 服务端的API接口
│   ├── utils                                   // 自定义中间件
├── src                                         // 客户端代码
│   ├── assets                                  // 公共资源
│   ├── components                              // 组件           
│   ├── global                                  // 全局方法和样式
│   ├── router                                  // 路由
│   ├── view                                    // 路由页面
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