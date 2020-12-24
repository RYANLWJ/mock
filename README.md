# 接口模拟 (mock) 读写本地 JSON 数据

****************************************************************

- That is an easy using tool to read and write local json file for data mocking.😻
- 这是一个易于使用的工具，用于读取和编写本地 json 文件进行数据模拟。👏🏻

### Instructions 🔧

* Get data 获取数据

  1. Create a new json file in jsonFiles directory. 在 jsonFiles 目录中创建一个新的 json 文件。
  2. Config the interfaces in `interfaces.js` file. 配置接口文件

      ```js
      /**
       * @note   interfaces 线上接口 配置
       * @param  name  本地接口名
       *         type  接口类型
       *         url   线上接口地址
       */
       const interfaces = [
        {
          name: "photoListUrl",
          type: "post",
          url: "/getphotolist"
        },
        // 第二个接口... 第三个接口
       ;

       module.exports = interfaces
      ```

  3. Require the `interfaces.js` & `mock.js` to your service file.Then use them as  middlewares to your service router. 在你的服务器 js 文件中引入`interfaces.js`和`mock.js`。然后使用它们作为服务路由器的中间件。

     ```js
      // Tip
      interfaces.forEach(({ type, url, name }) => router[type](url, mock  [name]));
     ```

* Read / Save / Update Json file data. 读取 / 保存 / 更新 Json 文件数据。
   1. You can checkout and customize the default/base methods in `actions.js `file. 你可以查看并根据实际情况自定义`action.js`文件中的默认方法。
   2. Require the actions.js to your service.js file so that easy to read and write the json file. 引入`action .js`到你的`service.js`文件，以便于读取和写入 json 文件。
