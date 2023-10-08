const workboxVersion = "6.4.2";

importScripts(
  `https://cdn.jsdelivr.net/npm/workbox-sw@${workboxVersion}/build/workbox-sw.min.js`
);

workbox.core.setCacheNameDetails({
  prefix: "noname",
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"a12f83c653cc465ed631f0bac5c10fbc","url":"./assets/exit-android.html"},{"revision":"1072dc7a3569ef2e5a840b94cfc673da","url":"./assets/exit-ios.html"},{"revision":"3b37d70cb872d8ee33ee5b122eaf0299","url":"./card/extra.js"},{"revision":"0a425426d2e05209521a47bb79a2d039","url":"./card/gujian.js"},{"revision":"879e29c7ee20bb22e06916067f028430","url":"./card/guozhan.js"},{"revision":"c5616f52fd5e8b29e4451b5326f62936","url":"./card/gwent.js"},{"revision":"c42269cc8073b590ba9cea08350c0d8e","url":"./card/hearth.js"},{"revision":"3e3b9890bd3543ed47d4c21824e2d31c","url":"./card/huanlekapai.js"},{"revision":"5ea5e0d3c31f4fcbeb41f452b3aa5af8","url":"./card/mtg.js"},{"revision":"eb34822811e7bcd2c5060ece6d84bb3a","url":"./card/sp.js"},{"revision":"ebc88eec1a4f09f4a293d2884fd95e91","url":"./card/standard.js"},{"revision":"a15840e003151dbb7885a4468245fc40","url":"./card/swd.js"},{"revision":"a40ef19b993cbb9ec59106d36678ec41","url":"./card/yingbian.js"},{"revision":"79a396716182a41dddd5f0e06bdf10b2","url":"./card/yongjian.js"},{"revision":"ffc547c151696c886dbf748bf85af73e","url":"./card/yunchou.js"},{"revision":"8830f924a0c499a3425e46969f07ca72","url":"./card/zhenfa.js"},{"revision":"6ce0178a8c3763a114a5199c417fed51","url":"./card/zhulu.js"},{"revision":"bbf7acca69c3af1e02e1f9eb6706c30e","url":"./character/clan.js"},{"revision":"7e712836ed7183d518d2d4ff55767826","url":"./character/collab.js"},{"revision":"887cdf1c56c77926e9c9c5137c6edf68","url":"./character/ddd.js"},{"revision":"fbc69d5f26aaf939aaeec795f21a0409","url":"./character/diy.js"},{"revision":"bb60229c0874c03e3ed019a4cad94d52","url":"./character/extra.js"},{"revision":"84863dffbe89c351a9c7e46e73600841","url":"./character/gujian.js"},{"revision":"c7e9a1e9b7a2d7b0f4b6c8cb3ffa5f8b","url":"./character/gwent.js"},{"revision":"669e40754ac6922e612986039b2a435b","url":"./character/hearth.js"},{"revision":"98a6baf84ecbd73b26649b84eacf571a","url":"./character/huicui.js"},{"revision":"b9114698b74a0d1f6e38e318fb2f438c","url":"./character/jiange.js"},{"revision":"52cd5f1234005fcdf40bf239b56e5143","url":"./character/jsrg.js"},{"revision":"96d84fa0a3138c8abdae9f2ce09a979b","url":"./character/mobile.js"},{"revision":"99f43408336ab14221a1a8fb3dd7d209","url":"./character/mtg.js"},{"revision":"857b2df2a01a98039d946646b5a675b9","url":"./character/offline.js"},{"revision":"983d49389e853a34e0b7db063fa3534f","url":"./character/old.js"},{"revision":"2e2f3ac1e435c1406ba37b6b691aa032","url":"./character/ow.js"},{"revision":"13d72312e65067ececc04fa50fff28a9","url":"./character/rank.js"},{"revision":"1b944b12a7bcb326a11b89e961841df7","url":"./character/refresh.js"},{"revision":"ce80848f7ba37bd7156fe101ea4c6c83","url":"./character/sb.js"},{"revision":"13f685d0c3635797360af9832ee9b0d8","url":"./character/shenhua.js"},{"revision":"61abb8aa488bf5ac9cde1199975b09f5","url":"./character/shiji.js"},{"revision":"1fccbc6adc2c4031dab6fb1d1d7a9ceb","url":"./character/sp.js"},{"revision":"9ae63b5112f7df0804ea3f10da62af10","url":"./character/sp2.js"},{"revision":"c69b86cc0140d0f0b6d1c496f51fd1b0","url":"./character/standard.js"},{"revision":"715f419063085555965b56bb44b81552","url":"./character/swd.js"},{"revision":"d08c5fa316e3a89a90623366a05cd2da","url":"./character/tw.js"},{"revision":"715b31a75ce000862c2b7a46fae40077","url":"./character/xiake.js"},{"revision":"a925864d7ea0f35d436790b1d9a8274b","url":"./character/xianding.js"},{"revision":"6553ff7e4d45f187de96e61244925025","url":"./character/xianjian.js"},{"revision":"b62e18906dce9c365ddae7e50a525baf","url":"./character/xinghuoliaoyuan.js"},{"revision":"f98eee4f7af9ac6e2547441709989651","url":"./character/yijiang.js"},{"revision":"94a4fb548aed30f11717ce3761d38194","url":"./character/yingbian.js"},{"revision":"ce05c3c09f7171bba7fb7758f914e8d6","url":"./character/yxs.js"},{"revision":"992cbe9edebfce75dab9240eb67f952d","url":"./character/zhuogui.js"},{"revision":"4c64d591790f80a783e77c82370cd6a8","url":"./extension/boss/extension.js"},{"revision":"3c075dd1f653ca1bdf78fb705a0a49cc","url":"./extension/cardpile/extension.js"},{"revision":"ee5c349cec87305f10f4bd7dc0b55132","url":"./extension/coin/extension.js"},{"revision":"2408c9274f6bda0a397327a007e78d6f","url":"./extension/wuxing/extension.js"},{"revision":"02f7107ff443199a43395ff6b7680c5b","url":"./game/asset.js"},{"revision":"a9e18a22686db08cd1a8dde60b60608b","url":"./game/codemirror.js"},{"revision":"7b2de64fb1f7f92071cfa217606c4239","url":"./game/config.js"},{"revision":"898395c9eb47e3e9a2d6d1b9cc45cfea","url":"./game/core-js-bundle.js"},{"revision":"b590a1f648601613d10773f27b5be5e6","url":"./game/directory.js"},{"revision":"924c4353485a143c539c8de58c8d63eb","url":"./game/game.js"},{"revision":"d8c7cc74da60735a4f68dd966002b7ac","url":"./game/http.js"},{"revision":"174e1b1ec1cf43a2de83771bbf437aa9","url":"./game/jszip.js"},{"revision":"d9fd005b560a34afa95e626ed955f010","url":"./game/keyWords.js"},{"revision":"326e7e882284e868573710d4c3eba008","url":"./game/NoSleep.js"},{"revision":"12c0717d3a55591cc54e5d45c18d502e","url":"./game/package.js"},{"revision":"ee5db24c5c3940996262b4f08c25e6d9","url":"./game/path.js"},{"revision":"87c986c596d0e878ff7a4d7012782d40","url":"./game/phantom.js"},{"revision":"62656360d428c65c913f30b18cef25ea","url":"./game/pinyinjs.js"},{"revision":"fb3255f5ab39ebd17141db3c358da422","url":"./game/pressure.js"},{"revision":"daa89307404f0e10f5f8fb8246b8c954","url":"./game/server.js"},{"revision":"0dd4e03b8d9d1c800fe71150f222a17d","url":"./game/source.js"},{"revision":"17ad292020754caf31fcf439e52f4ce8","url":"./game/update.js"},{"revision":"fb43307a41e2f51b5f66a2335118f7d6","url":"./index.html"},{"revision":"92f4086629efd9f959918ce49333fa0d","url":"./layout/default/codemirror.css"},{"revision":"a5b21d2225c73946f1b3b0c213e9da09","url":"./layout/default/layout.css"},{"revision":"312d22c50984449c469c95e2524fefb7","url":"./layout/default/menu.css"},{"revision":"af88dcc8690d2301481e86d223deae56","url":"./layout/default/phone.css"},{"revision":"43eab0bd132272f6de9910fb3269fcec","url":"./layout/long/layout.css"},{"revision":"fea308ad79b0dfcceaaaeeb26c3c9a83","url":"./layout/long2/layout.css"},{"revision":"2f410a410db075839dd0d8c819732679","url":"./layout/mobile/equip.css"},{"revision":"3e5bf745313d9dac45c0015121335f16","url":"./layout/mobile/layout.css"},{"revision":"8ac8205aee81a33f13bdf456d1181efc","url":"./layout/mode/boss.css"},{"revision":"532352088f90f95cca331d5972e46367","url":"./layout/mode/chess.css"},{"revision":"854a089b6240dda88ee297851c8a63ec","url":"./layout/mode/stone.css"},{"revision":"6f89b72edfe8e39e58b8be63db36a953","url":"./layout/mode/story.css"},{"revision":"e33a22320c230a31eb6d021f454b7b35","url":"./layout/mode/tafang.css"},{"revision":"c4b216c2dc8b157f897b30b1b0a1b9f3","url":"./layout/newlayout/equip.css"},{"revision":"988906771fb3e58bcf07a7c256c3dffa","url":"./layout/newlayout/global.css"},{"revision":"91b4e8e98aa1d78decf5c1da97ec1e5b","url":"./layout/newlayout/layout.css"},{"revision":"42c32d30d7d4c03790694eaf36b4ca46","url":"./layout/nova/layout.css"},{"revision":"197dcd1fa2620390fbc5466e21517f5c","url":"./manifest.json"},{"revision":"d2515493989b38fde56d84bb50df5b27","url":"./mode/boss.js"},{"revision":"b14b0ba8435b27b8160076bcf59dcb83","url":"./mode/brawl.js"},{"revision":"a3bf18303103470cd73a40fc8a46c4db","url":"./mode/chess.js"},{"revision":"332f79cd149569bff763b0943885f83a","url":"./mode/connect.js"},{"revision":"a4a0910eebfd4b8048f6d5e0a1a9258d","url":"./mode/doudizhu.js"},{"revision":"21f0a468e8ca789bf3ba13295a6801e4","url":"./mode/guozhan.js"},{"revision":"429ffed35cb95aea5c6a2901dbbbe55e","url":"./mode/identity.js"},{"revision":"9263025e018f6c52ab82e20aedd7a403","url":"./mode/realtime.js"},{"revision":"87762ffc724ccee4799d54c1418e8041","url":"./mode/single.js"},{"revision":"426d4bb3122cff2bc73b7318c9795a92","url":"./mode/stone.js"},{"revision":"130f2366674da9e20acf27710a33a0e3","url":"./mode/tafang.js"},{"revision":"59d9a5a6612d5a6149554c5688c65773","url":"./mode/versus.js"},{"revision":"edb3f9f49b11face8130a85e4c70ab5c","url":"./pwa.js"},{"revision":"0ec224f84344777c2a5e8c2b830f739e","url":"./theme/music/style.css"},{"revision":"652922b6159a0d22541cfb88d63fa83e","url":"./theme/simple/style.css"},{"revision":"7f4cb54c9b52ad1b87843eabf75f70ae","url":"./theme/style/card/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/card/default.css"},{"revision":"3d09c017674d531255b8d5d3a46c4a4d","url":"./theme/style/card/music.css"},{"revision":"f24a64e49a3eae1262ef5d0025f4f416","url":"./theme/style/card/new.css"},{"revision":"8b0acf307e0e20907a6139c135a983bf","url":"./theme/style/card/ol.css"},{"revision":"13dd1eb1d38db6ea29f8381a979a4502","url":"./theme/style/card/simple.css"},{"revision":"872481406234c8de5bdcc07847bf11a0","url":"./theme/style/card/wood.css"},{"revision":"6de3498da566d7c3daf828aa0e127cd6","url":"./theme/style/cardback/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/cardback/default.css"},{"revision":"cd171fde522ce2d1b0d303fd8f5ee70b","url":"./theme/style/cardback/feicheng.css"},{"revision":"9652f6a6fff706c25f4ecca80f6a3ac8","url":"./theme/style/cardback/liusha.css"},{"revision":"929d2741f832e774d7b9db7cf0882760","url":"./theme/style/cardback/music.css"},{"revision":"5c67d2e6b25fce8a11ef2d97c5d39ad1","url":"./theme/style/cardback/new.css"},{"revision":"80ed8cc3f3e80bf70b60eaf4e8afd939","url":"./theme/style/cardback/official.css"},{"revision":"bce60d8ee0af66eed08b2bf60ec2b059","url":"./theme/style/cardback/ol.css"},{"revision":"1845003824488776c167814024f61973","url":"./theme/style/cardback/wood.css"},{"revision":"c843a1c67cfc143f6b7feab625821dae","url":"./theme/style/hp/custom.css"},{"revision":"4f1c7defcad3a3ff38baa39cbf1c2b89","url":"./theme/style/hp/default.css"},{"revision":"21b61481516a270c19fbe5c43b136730","url":"./theme/style/hp/emotion.css"},{"revision":"8281d0359c41ee7777b5342ef8055bec","url":"./theme/style/hp/glass.css"},{"revision":"1b45e6c40e90850ce604b99b0a364cbe","url":"./theme/style/hp/official.css"},{"revision":"48afb74a31ad50d7fe6620fcfeb935ae","url":"./theme/style/hp/ol.css"},{"revision":"68de705f81faf300190a686c5a0667cf","url":"./theme/style/hp/round.css"},{"revision":"984a1cc9c122fd72b5675b4c2cc8b7e9","url":"./theme/style/hp/xinglass.css"},{"revision":"63e7d55fa656b9c9dc8a1e32126e0502","url":"./theme/style/hp/xinround.css"},{"revision":"bb138117965a83b75cc8b1e2d528781a","url":"./theme/woodden/style.css"}]);
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
