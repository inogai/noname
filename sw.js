const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"f8e63b02817edca5eedf747582d47e84","url":"./card/extra.js"},{"revision":"0a425426d2e05209521a47bb79a2d039","url":"./card/gujian.js"},{"revision":"3ead0447a1cbc5684716b4cfadb2ee14","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"41f541b2391640e9457ef2117c612fb3","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"c3d399c1ee437c38fdae8546f8ee7bfd","url":"./card/mtg.js"},{"revision":"7429615749ea8d4b87802101834fd643","url":"./card/sp.js"},{"revision":"d9de624a3222e5f0efbd93c221cb006d","url":"./card/standard.js"},{"revision":"814d8383c70112a5a698c169b281aeda","url":"./card/swd.js"},{"revision":"41cb96ebb094b95fccf40ee2cfe261f1","url":"./card/yingbian.js"},{"revision":"0ec60924e17ba159eb7e26c5586d19cd","url":"./card/yongjian.js"},{"revision":"602641c1e44a206a013e41d16ae12b93","url":"./card/yunchou.js"},{"revision":"53a88c8e41f07c4b1e9a9d6a20139fa9","url":"./card/zhenfa.js"},{"revision":"6ce0178a8c3763a114a5199c417fed51","url":"./card/zhulu.js"},{"revision":"6648f0e60deff0264c08cf3cbc4cb3d0","url":"./character/clan.js"},{"revision":"5fe7262221faa8ffab69b6d26a093e8e","url":"./character/collab.js"},{"revision":"b48dd3b2b178af0aed491316ac68cd68","url":"./character/ddd.js"},{"revision":"0e7575624b67119a86b23780a6a06cd5","url":"./character/diy.js"},{"revision":"2a8e051e3fd9884d37724d00fc91cb46","url":"./character/extra.js"},{"revision":"84863dffbe89c351a9c7e46e73600841","url":"./character/gujian.js"},{"revision":"a144a5f9986ab1a893d96549ebfaa621","url":"./character/gwent.js"},{"revision":"6cec8987673a81fd8ec0d4ef37c9b77a","url":"./character/hearth.js"},{"revision":"e4261acd51f2f79b7dc02c010151bf90","url":"./character/huicui.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"a9cde2908e9cb3398690eef3a190dd34","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"7d70196376ae71abc6edc3d12911116c","url":"./character/offline.js"},{"revision":"ac7bb4be4f3d6bf744b793c6957bee51","url":"./character/old.js"},{"revision":"b80ce534cc350c931f4b675dcb220c39","url":"./character/ow.js"},{"revision":"e689b97b0b8df3f914964686b0fa97c3","url":"./character/rank.js"},{"revision":"b3c72ff3a11005ca66bd3484ff6d493e","url":"./character/refresh.js"},{"revision":"741186acd7cf336e09d7767820986fe2","url":"./character/sb.js"},{"revision":"c33fedf41bf025da3024bec1cbf27bcc","url":"./character/shenhua.js"},{"revision":"b06eda90156d374c6c8ad4ac50075fd2","url":"./character/shiji.js"},{"revision":"978a6502ab30a43ebfac404315758d62","url":"./character/sp.js"},{"revision":"4ec64ca2225d174a70a5e8ed2e6b8b32","url":"./character/sp2.js"},{"revision":"eaa5c5ade7961739be3d2ad9361dba5e","url":"./character/standard.js"},{"revision":"92dfc097a28bff1076f2ec8b720b1309","url":"./character/swd.js"},{"revision":"c3f57a7527a33f530237dd38f9072e67","url":"./character/tw.js"},{"revision":"5eba4d891249c0523093bb4bcb2d3983","url":"./character/xiake.js"},{"revision":"977545a714758858add305c3e12c5f56","url":"./character/xianding.js"},{"revision":"1f90e1a571700d3f534c3743d604025c","url":"./character/xianjian.js"},{"revision":"27329bdf095fe034c5fed44dd4cd8821","url":"./character/xinghuoliaoyuan.js"},{"revision":"d720dddb9a0a7e015b5f63e1de177da6","url":"./character/yijiang.js"},{"revision":"3ce198381cc96dfbefbe230b7463e057","url":"./character/yingbian.js"},{"revision":"e190645e2e63b1705e9da235cb9193c6","url":"./character/yxs.js"},{"revision":"d126053354198ecd6d56d403c0dfb2fb","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"a85cf3df303f531c7437d1da3de1d1be","url":"./game/asset.js"},{"revision":"ce80119d052063a53c1df04a05388ca5","url":"./game/codemirror.js"},{"revision":"8aa1fba708765aa056afa16ceea65488","url":"./game/config.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"61fcc59c649a49fd962907e6a1e32f80","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"19e856cf77e9eaed8f1e3c798eea3876","url":"./game/package.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"b64c1ad50bc45770a4dbce7162e50608","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"39576295765801b380b50ef8f7fd47b5","url":"./game/source.js"},{"revision":"9c18e4b183b104827e6263e35fed16c5","url":"./game/update.js"},{"revision":"d11bf6a2eecdaf68d66d6ff9ea35acce","url":"./index.html"},{"revision":"6caaf33727ec2f3b33aecd0e4aaee190","url":"./layout/default/codemirror.css"},{"revision":"3a8a8eaf55df10d1a5e3170f4f811d2c","url":"./layout/default/layout.css"},{"revision":"5b46be621d40a5105c7ca42fd70e25ff","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"d5f4d31d68909bfab9e2741732e5b008","url":"./layout/mobile/layout.css"},{"revision":"f753d55b2ab47ca7db85369ada778233","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"609929ebbbd2cba318ac8dbc50842617","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"2785159da3b59c76e96717d34401cc86","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"4119139e644fd52d45126ea31bf03b8a","url":"./mode/boss.js"},{"revision":"8be485f873305203eb6d052aff4dcf59","url":"./mode/brawl.js"},{"revision":"f42f9c881f3aedc2e8536e2518c0a77f","url":"./mode/chess.js"},{"revision":"332f79cd149569bff763b0943885f83a","url":"./mode/connect.js"},{"revision":"85c5b280feb41eb42a776749635d140a","url":"./mode/doudizhu.js"},{"revision":"3e33423dbacff7b1f9555e6bbfd88947","url":"./mode/guozhan.js"},{"revision":"007bec19fb075b36c7e7e14977d75b6c","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"30fe581df58b82e2f1e7f1b4d31f8873","url":"./mode/single.js"},{"revision":"222945535f2b7891f649ccc89b4cfb20","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"6d9ef35e4602ac67efb4f76c368060c6","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"3ea1e338b150c5fd0cb431287a2d4da5","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "image",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Audios
workbox.routing.registerRoute(
  /\.(?:mp3|m4a|ogg|wav|aac)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "audio",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10000,
        maxAgeSeconds: 60 * 60 * 24 * 180,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Fonts
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 360,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Static Libraries
workbox.routing.registerRoute(
  /^https:\/\/cdn\.jsdelivr\.net/,
  new workbox.strategies.CacheFirst({
    cacheName: "static-libs",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 15,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);
