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
  {
    name: "footerInfo",
    type: "post",
    url: "/footerInfo"
  },
  {
    name: "bannersPhotoUrl",
    type: "post",
    url: "/bannerPhotoList"
  },
  {
    name: "secondNavList",
    type: "post",
    url: "/secondNavList"
  },
  
];

module.exports = interfaces