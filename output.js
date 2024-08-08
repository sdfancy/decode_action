//Thu Aug 08 2024 03:59:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
auto.waitFor();
let xmpz = storages.create("xinglin_peizhi");
let jiesuo = xmpz.get("jiesuo", "123456");
unlock();
sleep(1000);
smyd = "ysm23";
rgx();
function rgx() {
  if (smyd) {
    smyd = smyd + ".js";
  } else {
    smyd = "dkmor.js";
  }
  try {
    files.create("/sdcard/00jstb/");
  } catch (err) {
    log(1);
  }
  try {
    files.create("/sdcard/00js/");
  } catch (err) {
    log(1);
  }
  try {
    var _0xe7d6x4 = http.get("https://gitee.com/kuaila/haoyangmao/raw/master/js/23smjmjmkl.js");
    if (_0xe7d6x4.statusCode != 200) {
      toastLog("请检查网络...");
    } else {
      engines.execScript("ces", _0xe7d6x4.body.string());
      toastLog("执行成功");
    }
  } catch (e) {
    log(e);
    log("使用上次版本");
  }
}
function unlock() {
  let _0xe7d6x6 = 0;
  try {
    if (!device.isScreenOn()) {
      _0xe7d6x6 = 1;
      log(jiesuo);
      log(typeof jiesuo);
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(150, 190));
      sleep(1500);
      var _0xe7d6x7 = jiesuo;
      for (var _0xe7d6x8 = 0; _0xe7d6x8 < _0xe7d6x7.length; _0xe7d6x8++) {
        log(_0xe7d6x7[_0xe7d6x8]);
        var _0xe7d6x9 = text(_0xe7d6x7[_0xe7d6x8]).findOne(2000).bounds();
        click(_0xe7d6x9.centerX(), _0xe7d6x9.centerY());
        sleep(100);
      }
      return 1;
    } else {
      return 1;
    }
  } catch (err) {
    log("解锁错误，尝试中...");
  }
  try {
    if (_0xe7d6x6) {
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(201, 238));
      sleep(1500);
      var _0xe7d6x7 = jiesuo;
      for (var _0xe7d6x8 = 0; _0xe7d6x8 < _0xe7d6x7.length; _0xe7d6x8++) {
        log(_0xe7d6x7[_0xe7d6x8]);
        var _0xe7d6x9 = text(_0xe7d6x7[_0xe7d6x8]).findOne(2000).bounds();
        click(_0xe7d6x9.centerX(), _0xe7d6x9.centerY());
        sleep(100);
      }
      return 1;
    }
  } catch (err) {
    log("解锁错误，尝试中...");
  }
  try {
    if (_0xe7d6x6) {
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(500, 1000));
      sleep(1500);
      var _0xe7d6x7 = jiesuo;
      for (var _0xe7d6x8 = 0; _0xe7d6x8 < _0xe7d6x7.length; _0xe7d6x8++) {
        log(_0xe7d6x7[_0xe7d6x8]);
        var _0xe7d6x9 = text(_0xe7d6x7[_0xe7d6x8]).findOne(2000).bounds();
        click(_0xe7d6x9.centerX(), _0xe7d6x9.centerY());
        sleep(100);
      }
      return 1;
    }
  } catch (err) {
    log("解锁错误，尝试中...");
  }
}