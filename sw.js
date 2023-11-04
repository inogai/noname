const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"21a63de0aa732d238e440a00e8cebe27","url":"./card/extra.js"},{"revision":"d712291e8aa2dfa9748220e9ea82210f","url":"./card/gujian.js"},{"revision":"0a4668b8f3d61e40edd5e469d97a7e2d","url":"./card/guozhan.js"},{"revision":"9264106e4f4465fd204ed41374cef073","url":"./card/gwent.js"},{"revision":"cc0cbc2eb89b1a39ab601dc90be50b35","url":"./card/hearth.js"},{"revision":"7d4f95440f449a83afa049cfbc548627","url":"./card/huanlekapai.js"},{"revision":"0ca6369588ddbd29e6e7c09e9b75e582","url":"./card/mtg.js"},{"revision":"e7960ccaf49cd189236e7a5d97f73abf","url":"./card/sp.js"},{"revision":"4a522886585f19b63752fccfcc13930f","url":"./card/standard.js"},{"revision":"5f6b8a2a29b4e61ebd3d855f29275826","url":"./card/swd.js"},{"revision":"a40ef19b993cbb9ec59106d36678ec41","url":"./card/yingbian.js"},{"revision":"fb5155c43e8a24e2dd4766722af055ae","url":"./card/yongjian.js"},{"revision":"71fdbe39941d57d4433bf096b729779c","url":"./card/yunchou.js"},{"revision":"dabf5ad499af22be2111e3c19921c170","url":"./card/zhenfa.js"},{"revision":"6ce0178a8c3763a114a5199c417fed51","url":"./card/zhulu.js"},{"revision":"46df1e06f5ec99e050b778a93a58fcf8","url":"./character/clan.js"},{"revision":"7f1940b7d4dceb0ee459755e0f6b438b","url":"./character/collab.js"},{"revision":"958f698c20c63be5404ec8921f04f0bf","url":"./character/ddd.js"},{"revision":"1928b320f5d529e41d8e73bb517d7d8a","url":"./character/diy.js"},{"revision":"9a2acf412e99d290b8885226caf2a2e7","url":"./character/extra.js"},{"revision":"63a5731982cd71fecb1651bdf3bb54a5","url":"./character/gujian.js"},{"revision":"fb95fef1f76f316f866a76f48c236a8c","url":"./character/gwent.js"},{"revision":"4c6bf369aacac4c49e1ca0c6bdb433b6","url":"./character/hearth.js"},{"revision":"3d18af5278406c1c4ac0f2c677ed7968","url":"./character/huicui.js"},{"revision":"7650147990af6618b06128b081bef5a8","url":"./character/jiange.js"},{"revision":"46fd572135e0ccdb76ffa44be8cd5d81","url":"./character/jsrg.js"},{"revision":"2824d54fe921739fe6915120d7962494","url":"./character/mobile.js"},{"revision":"7b1dadca7e35fe8c4cb537753285f452","url":"./character/mtg.js"},{"revision":"581b2435f88f1b23feba8d6ed830f54c","url":"./character/offline.js"},{"revision":"f894888c7e5ae79777fe9466c6716587","url":"./character/old.js"},{"revision":"f75c8f72224805fc13159dd07eea6b8d","url":"./character/ow.js"},{"revision":"94c941c5439c11c40a0a3e9f64c8a0bf","url":"./character/rank.js"},{"revision":"1a119634706eedfa06b517d05adb9eff","url":"./character/refresh.js"},{"revision":"6c0e54cf3279c6433b2d66c8172b41be","url":"./character/sb.js"},{"revision":"4778ef95ad59080eaaa4bf3c6c944a30","url":"./character/shenhua.js"},{"revision":"a346b92a98e72db131ae66e7a1cf212c","url":"./character/shiji.js"},{"revision":"f54bff761df2e9c43d848ec413a74baa","url":"./character/sp.js"},{"revision":"3863b7e0da0b0abaaf9c9a0473b5bb06","url":"./character/sp2.js"},{"revision":"58a1d45c27b98285acdd1f3322c09316","url":"./character/standard.js"},{"revision":"a34e37de26b6c1d940cad50b728cd8b9","url":"./character/swd.js"},{"revision":"756774542fd9abe7cd4cc6dd44281ece","url":"./character/tw.js"},{"revision":"47a2dfa2d741017e8cca69d778b29f7e","url":"./character/xiake.js"},{"revision":"cbdba4ee3c1c9d396951c30348d0d642","url":"./character/xianding.js"},{"revision":"1a72b2d548c202ba55b31219a4fec5c2","url":"./character/xianjian.js"},{"revision":"82755feac7e4eb1480f467b8c6e254a9","url":"./character/xinghuoliaoyuan.js"},{"revision":"cf6bf9f43e13504f573d5c6213bd3ad0","url":"./character/yijiang.js"},{"revision":"14b989d155a4e17f96e99c11278405f0","url":"./character/yingbian.js"},{"revision":"092eb0080326a47d7b792380b3e7995e","url":"./character/yxs.js"},{"revision":"08ab38c4fc5bb75d762a15bfcf6d829e","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"3dd8a33cb58d8295ce4eb953ddc96fde","url":"./game/asset.js"},{"revision":"a9e18a22686db08cd1a8dde60b60608b","url":"./game/codemirror.js"},{"revision":"8808277ebf8b99c627b5c1e43624f2e2","url":"./game/config.js"},{"revision":"898395c9eb47e3e9a2d6d1b9cc45cfea","url":"./game/core-js-bundle.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"60bd1bf9a18a07d1f0f5b636decd889d","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"12c0717d3a55591cc54e5d45c18d502e","url":"./game/package.js"},{"revision":"ee5db24c5c3940996262b4f08c25e6d9","url":"./game/path.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"ae400ee9ace45290d043fa8fac73a1a6","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"0dd4e03b8d9d1c800fe71150f222a17d","url":"./game/source.js"},{"revision":"fedaa55a9df53cc042cc2d090d46ddb1","url":"./game/update.js"},{"revision":"fb43307a41e2f51b5f66a2335118f7d6","url":"./index.html"},{"revision":"92f4086629efd9f959918ce49333fa0d","url":"./layout/default/codemirror.css"},{"revision":"2a23e84e51904d14c414386f0d13c7c1","url":"./layout/default/layout.css"},{"revision":"312d22c50984449c469c95e2524fefb7","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"3e5bf745313d9dac45c0015121335f16","url":"./layout/mobile/layout.css"},{"revision":"8ac8205aee81a33f13bdf456d1181efc","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"854a089b6240dda88ee297851c8a63ec","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"13ff685820d9bc437b3476ee5942dac1","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"eea3f459dde723b56dd2bc8c870ba997","url":"./mode/boss.js"},{"revision":"a5f552dc06e529abc2ed590a26fd8489","url":"./mode/brawl.js"},{"revision":"41ed2191ece60d5765df3c363f6dbe04","url":"./mode/chess.js"},{"revision":"dc0e46e70a7e6f0841e8c356787c9489","url":"./mode/connect.js"},{"revision":"275e01aa441b37b917350c1ab01434a3","url":"./mode/doudizhu.js"},{"revision":"bd7174512d39d4e32fbd681d510b29c9","url":"./mode/guozhan.js"},{"revision":"6edd112d3d2efbaf62bf9ce3a3227823","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"87762ffc724ccee4799d54c1418e8041","url":"./mode/single.js"},{"revision":"1b90fc20bc4581bd57ccecb4b4c45e5f","url":"./mode/stone.js"},{"revision":"7b098fe5d20a4421feefa6e31287b607","url":"./mode/tafang.js"},{"revision":"8462051d4b2a6d4306b17e4a78fa4dc7","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"652922b6159a0d22541cfb88d63fa83e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
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
