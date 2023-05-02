const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"1d2feb9ae6fad87cb9a131a909bf2194","url":"./card/extra.js"},{"revision":"0a425426d2e05209521a47bb79a2d039","url":"./card/gujian.js"},{"revision":"b684b9f0a979a222a11addb57c3b827d","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"41f541b2391640e9457ef2117c612fb3","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"c3d399c1ee437c38fdae8546f8ee7bfd","url":"./card/mtg.js"},{"revision":"682024c377e4a13aa6b6bfad6146d4e0","url":"./card/sp.js"},{"revision":"44cd862063803191ea96e1619d62bfde","url":"./card/standard.js"},{"revision":"814d8383c70112a5a698c169b281aeda","url":"./card/swd.js"},{"revision":"713649309c552e6365179fc2d35e2ec6","url":"./card/yingbian.js"},{"revision":"679cae26556042708b6cb4c234b92b8f","url":"./card/yongjian.js"},{"revision":"602641c1e44a206a013e41d16ae12b93","url":"./card/yunchou.js"},{"revision":"53a88c8e41f07c4b1e9a9d6a20139fa9","url":"./card/zhenfa.js"},{"revision":"9062edf4d51d513f06ca7c9b5988c402","url":"./card/zhulu.js"},{"revision":"c3743339f6ba83614ac7cd429ec487f5","url":"./character/clan.js"},{"revision":"3c6f2d50311f27957162f6c98e6d0f09","url":"./character/diy.js"},{"revision":"dc18cdb1e1cf96dad6196b0f86e39490","url":"./character/extra.js"},{"revision":"84863dffbe89c351a9c7e46e73600841","url":"./character/gujian.js"},{"revision":"a144a5f9986ab1a893d96549ebfaa621","url":"./character/gwent.js"},{"revision":"6cec8987673a81fd8ec0d4ef37c9b77a","url":"./character/hearth.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"7262cdb821d6cd6eb7667946ee556557","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"391158ac75aa2056692c9c0704a1392e","url":"./character/offline.js"},{"revision":"b0f76c2c8833477801babbecad497310","url":"./character/old.js"},{"revision":"b80ce534cc350c931f4b675dcb220c39","url":"./character/ow.js"},{"revision":"3f247a743419af7564fbeb3bd72ab072","url":"./character/rank.js"},{"revision":"7e4789619fe1398e8f5b3be1ebbd210d","url":"./character/refresh.js"},{"revision":"802a94aadce9fc4b430bcb1ef1646619","url":"./character/sb.js"},{"revision":"f0a09a83c2ce1dce06d92bee1d187628","url":"./character/shenhua.js"},{"revision":"a0270854e97a64f0170a5603adf42b7c","url":"./character/sp.js"},{"revision":"e202db1e80724df3b715902d354ba832","url":"./character/sp2.js"},{"revision":"6a3f200eae2e5e890522b2b02290ac9f","url":"./character/standard.js"},{"revision":"92dfc097a28bff1076f2ec8b720b1309","url":"./character/swd.js"},{"revision":"71186eea9c87afe300318fd07ccb74f9","url":"./character/tw.js"},{"revision":"5eba4d891249c0523093bb4bcb2d3983","url":"./character/xiake.js"},{"revision":"1f90e1a571700d3f534c3743d604025c","url":"./character/xianjian.js"},{"revision":"b458c3fabd408d0aee1813495c2c8d89","url":"./character/xinghuoliaoyuan.js"},{"revision":"c1568ca7f90d6ab16f578dca07a53321","url":"./character/yijiang.js"},{"revision":"fa2c9a15a5a26fd95cfd64d52c156021","url":"./character/yingbian.js"},{"revision":"e190645e2e63b1705e9da235cb9193c6","url":"./character/yxs.js"},{"revision":"d126053354198ecd6d56d403c0dfb2fb","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"3ac72a638e81941ffa4ef08d526f4490","url":"./game/asset.js"},{"revision":"ce80119d052063a53c1df04a05388ca5","url":"./game/codemirror.js"},{"revision":"d7879ee7ab57b5705a1b9de2facadc6e","url":"./game/config.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"94f3e44692683f6b70d8f89f260a4e53","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"caac185d5e7d442d7a668cfce77c17ce","url":"./game/package.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"7e9688b251ea0f8f63f8b5a98ac2b352","url":"./game/server.js"},{"revision":"5bcacf785051e6b8149a1d915635a8a0","url":"./game/source.js"},{"revision":"54d0466b37d06758c007963790a17014","url":"./game/update.js"},{"revision":"d11bf6a2eecdaf68d66d6ff9ea35acce","url":"./index.html"},{"revision":"6caaf33727ec2f3b33aecd0e4aaee190","url":"./layout/default/codemirror.css"},{"revision":"4812731670725dbeddaf50db54d2bcfa","url":"./layout/default/layout.css"},{"revision":"5b46be621d40a5105c7ca42fd70e25ff","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"dfd9c3b96bfac314fb37cb43f0c4a9d4","url":"./layout/layout.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"b24b9a847076eff4a796a688d00db88d","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"fb9b70abd30d86ed3a455039497c2fbf","url":"./layout/mobile/layout.css"},{"revision":"f753d55b2ab47ca7db85369ada778233","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"609929ebbbd2cba318ac8dbc50842617","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"13c6e5db577f428a9646ff63c540c24f","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"0c482206be8eee9a176b37d2c81f0313","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"14b5cbbcaf7e76b4f180ebc56edae407","url":"./mode/asset.js"},{"revision":"0cbca32e6a6c7e2ecc9d01c4d6a518c3","url":"./mode/boss.js"},{"revision":"82195a52d8c7c8f278422d69d3cf6507","url":"./mode/brawl.js"},{"revision":"f42f9c881f3aedc2e8536e2518c0a77f","url":"./mode/chess.js"},{"revision":"1118f4f9f5fcdd155777d6be8730ec15","url":"./mode/connect.js"},{"revision":"54e35700fb61a467b4a33aa379fbdc00","url":"./mode/doudizhu.js"},{"revision":"3117fa7544fc79c3e85f14e8ff867bff","url":"./mode/guozhan.js"},{"revision":"263bbded89f4545294c8024805d81f0b","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"2378dd10ff1e285d561b64d4a42663e0","url":"./mode/single.js"},{"revision":"222945535f2b7891f649ccc89b4cfb20","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"2758939cf080ab0d9a7c673a52c52743","url":"./mode/update.js"},{"revision":"dcbd24a50b336d4593e1febc97428450","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"d8917ea443183d938c42057397afd33e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
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
