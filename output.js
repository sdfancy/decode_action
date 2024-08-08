//Thu Aug 08 2024 04:33:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
auto.waitFor();
engines.all().forEach(_0x10b8e1 => {
  _0x10b8e1.getSource().toString().indexOf("shy.js") === -1 && engines.myEngine().toString() !== _0x10b8e1.toString() && _0x10b8e1.forceStop();
});
unlock();
var xmpz = storages.create("xinglin_peizhi"),
  pzycs = xmpz.get("pzycs");
log("pzycs:" + pzycs);
var smyd_sk = xmpz.get("smyd_sk");
log("smyd_sk:" + smyd_sk);
var smyd_tx = xmpz.get("smyd_tx");
log("smyd_tx:" + smyd_tx);
var jiesuo = xmpz.get("jiesuo");
log("jiesuo:" + jiesuo);
var yxhjpz = xmpz.get("yxhjpz");
log("yxhjpz:" + yxhjpz);
var scmsValue = xmpz.get("scmsValue");
let itemgb = "";
log("scmsValue:" + scmsValue);
xmpz.put("bcydcs", 0);
let yxhj = "困鱼";
yxhjjc();
function yxhjjc() {
  try {
    if (!getPackageName(yxhjpz)) toastLog("检测中...");else return yxhj = yxhjpz, 1;
  } catch (_0x4119de) {
    log(_0x4119de.message);
  }
  try {
    if (!getPackageName("Hamibot")) toastLog("检测中...");else return yxhj = "Hamibot", 1;
  } catch (_0x759b45) {
    log(_0x759b45.message);
  }
  try {
    if (!getPackageName("Autox.js v6")) toastLog("检测中...");else return yxhj = "Auto.js", 1;
  } catch (_0x57471a) {
    log(_0x57471a.message);
  }
  try {
    if (!getPackageName("Auto.js")) toastLog("检测中...");else return yxhj = "Auto.js", 1;
  } catch (_0x56d275) {
    log(_0x56d275.message);
  }
  try {
    if (!getPackageName("困鱼")) toastLog("检测中...");else return yxhj = "困鱼", 1;
  } catch (_0x2b249e) {
    log(_0x2b249e.message);
  }
}
log(yxhj);
let qjyc = pzycs * 1000;
toastLog("开启屏幕长亮，程序结束后关闭...");
device.keepScreenOn(1000 * 60 * 60 * 24);
sleep(2000);
yinl0();
toastLog("随时按音量下键来停止脚本！");
sleep(qjyc);
toastLog("即将开始...");
sleep(qjyc);
var jblj = "/sdcard/00jstb/";
files.removeDir(jblj);
files.ensureDir(jblj);
let kd = device.width,
  gd = device.height,
  kdxs = kd / 1080,
  gdxs = gd / 2340,
  sjwybz = device.fingerprint;
log(sjwybz);
log("环境区over");
dyc = 5000;
xyc = 1000;
zyc = 2000;
let jg = "",
  shuangkcs = 0,
  ydcsz = 0,
  cc = 1,
  c = 1;
log("变量区over");
let apmc = "微信",
  wxrw = 1;
!getPackageName("微信") && (toastLog("未发现安装包，此类任务不执行"), wxrw = 0);
var 主进程 = 0;
try {
  try {
    主进程.interrupt();
  } catch (_0x343e27) {}
  sleep(qjyc + 200);
  主进程 = threads.start(function () {
    try {
      ysm(0);
    } catch (_0x2c524a) {
      log(_0x2c524a.message);
      toastLog("继续...");
      try {
        ysm(0);
      } catch (_0x1f200a) {
        log(_0x1f200a.message);
        toastLog("继续...");
      }
    }
    if (smyd_sk) try {
      log("微信2");
      ysm(1);
    } catch (_0x303585) {
      log(_0x303585.message);
      toastLog("继续...");
      try {
        ysm(1);
      } catch (_0x4050be) {
        log(_0x4050be.message);
        toastLog("继续...");
      }
    } else toastLog("未双开");
  });
} catch (_0x5891be) {
  log(_0x5891be.message);
  toastLog("进程执行出错，继续...");
}
主进程.join(60 * 60 * 1000);
主进程.interrupt();
function ysm(_0x2086b9) {
  home();
  shuangkcs = _0x2086b9;
  tghmd = [];
  let _0x4b6459 = ["http://h5.lav0roouskv.cn/pipa_read?upuid=1713829"];
  for (var _0x4c2792 of tghmd) {
    removeStr(_0x4b6459, _0x4c2792);
  }
  let _0x233546 = _0x4b6459[parseInt(Math.random() * _0x4b6459.length, 10)],
    _0x57e088 = [_0x233546];
  for (var _0x3a4a5c of _0x57e088) {
    itemgb = _0x3a4a5c;
    erweima(_0x3a4a5c);
    sleep(1000);
    if (saoyis(shuangkcs, 0)) toastLog("启动扫一扫成功");else {
      toastLog("启动扫一扫失败");
      break;
    }
    toastLog("首次进入判定时间较长，需判定是否继续访问");
    log("进入文章进程");
    try {
      try {
        进入文章进程.interrupt();
      } catch (_0x30cab4) {}
      进入文章进程 = threads.start(function () {
        djzb("继续访问");
        djzb("使用完整服务", 0, 0, 6000);
        djzb("允许", 1);
        djzb("继续访问", 1);
        djzb("继续访问", 1);
      });
    } catch (_0x35b846) {
      log(222);
      log(_0x35b846.message);
    }
    进入文章进程.join(10 * 1000);
    log("开始阅读？");
    if (click("开始阅读") || djzb("开始阅读", 0, 0, 20 * 1000)) {
      sleep(qjyc + 2000);
      var _0x150217 = text("长按二维码开始阅读").findOne(5000);
      if (_0x150217 != null) {
        log("长按找到");
        sleep(2000);
        var _0x330509 = _0x150217.bounds(),
          _0x1f7707 = _0x330509.centerX(),
          _0xabde77 = _0x330509.top - 150;
        press(_0x1f7707, _0xabde77, 1000);
        sleep(qjyc + 1000);
        if (djzb("识别图中的二维码") || click("识别图中的二维码")) toastLog("开始阅读");else {
          toastLog("未点击识别");
          break;
        }
      } else log("长按未找到");
    }
    log("判断进入阅读");
    try {
      try {
        判断进入阅读.interrupt();
      } catch (_0x4fd15b) {}
      判断进入阅读 = threads.start(function () {
        textContains("发表于").findOne(30000) && toastLog("进入阅读");
      });
    } catch (_0x1a350a) {
      log(222);
      log(_0x1a350a.message);
    }
    判断进入阅读.join(10 * 1000);
    log("是否停止访问");
    try {
      click("确定");
      sleep(200);
      click("确定");
      sleep(200);
    } catch (_0x33fbd) {
      print(11);
    }
    if (descContains("已停止访问").findOne(100) || textContains("已停止访问").findOne(100) || textContains(_0x3a4a5c).findOne(100) || descContains("网页包含诱导分享").findOne(100) || textContains("网页包含诱导分享").findOne(100) || descContains("继续访问").findOne(100) || textContains("继续访问").findOne(100) || textContains("系统维护中").findOne(100) || textContains("已完成阅读").findOne(100)) {
      toast("停止访问");
      ydtx(_0x3a4a5c);
      djzb("com.tencent.mm:id/actionbar_up_indicator_btn", 2) ? log(1) : (click(60 * kd / 1080, 142 * gd / 2340), log(2));
    } else {
      toast("未发现停止访问，继续...");
      var _0x3ec3dc = 0;
      while (_0x3ec3dc < 33) {
        if ((descContains("阅读更新中").findOne(100) || textContains("阅读更新中").findOne(100) || descContains("提现").findOne(100) || textContains("提现").findOne(100)) && !textContains("发表于").findOne(100) || descContains("积分兑换").findOne(100) || textContains("积分兑换").findOne(100) || descContains(_0x3a4a5c).findOne(100) || textContains(_0x3a4a5c).findOne(100) || textContains("分钟后再来阅读").findOne(100) || textContains("通讯录").findOne(100)) {
          toastLog("\u505C\u6B62\u9605\u8BFB,\u603B\u9605\u8BFB\u6210\u529F\uFF1A" + ydcsz.toString());
          ydtx(_0x3a4a5c);
          djzb("com.tencent.mm:id/actionbar_up_indicator_btn", 2) ? log(1) : (click(60 * kd / 1080, 142 * gd / 2340), log(2));
          _0x3ec3dc += 50;
        } else {
          toast("继续阅读");
          for (hd = 0; hd < 10; hd++) {
            hdhs();
            sleep(random(300, 500));
            print("滑动：" + hd.toString());
          }
          back();
          if (text("文件传输助手").findOne(3000)) {
            toastLog("未在阅读网址");
            break;
          } else log("已进入网址");
          sleep(random(4000, 5000));
          djzb("领取失败");
          _0x3ec3dc += 1;
          ydcsz += 1;
          toast("阅读次数：" + _0x3ec3dc.toString());
        }
      }
    }
    toast("任务完成1次");
  }
  jg = "自动阅读" + ydcsz.toString() + "次。";
  log(jg);
  var _0x36a27b = xmpz.get("bcydcs", 0) + ydcsz;
  xmpz.put("bcydcs", _0x36a27b);
}
function chuanshuzs(_0x126283) {
  if (className("android.widget.TextView").text("文件传输助手").depth(13).findOne(1000)) {} else {
    dkapp(apmc);
    djzb("com.tencent.mm:id/actionbar_up_indicator_btn", 2);
    huisy("通讯录", "微信");
    djzb("微信");
    var _0x3acc8d = id("com.tencent.mm:id/icon_tv").findOne(qjyc + 1000);
    djkj(_0x3acc8d);
    sleep(2000);
    toastLog("找文件传输助手：文件传输助手最好置顶");
    hdl = 1;
    while (hdl < 5) {
      if (click("文件传输助手") || djzb("文件传输助手")) {
        toastLog("已找到文件传输助手");
        hdl = 8;
        break;
      } else toastLog("未找到文件传输助手"), hdhs("s"), sleep(2000);
      hdl = hdl + 1;
    }
  }
  if (hdl > 7) {
    var _0x37738e = text(_0x126283).findOne(1000);
    if (_0x37738e) {} else sleep(qjyc + 2000), input(_0x126283), sleep(qjyc), click("发送"), sleep(qjyc + 2000), _0x37738e = text(_0x126283).findOne(1000);
    if (djkj(_0x37738e, 3, 0, 50)) return toastLog("点击进入阅读"), 1;
  }
  return 0;
}
function ydtx(_0x26e67c) {
  if (smyd_tx) log("tx");else return 1;
  djzb("首页", 0, 0, 6000) && (sleep(2000), log("等待"));
  if (djzb("提现", 1)) djzb("立即提现");else {
    if (smyd_tx && erweima(_0x26e67c) && saoyis(shuangkcs, 0)) {
      toastLog("已进入提现");
      try {
        try {
          进入文章进程.interrupt();
        } catch (_0xd8b199) {}
        进入文章进程 = threads.start(function () {
          djzb("继续访问");
          djzb("使用完整服务", 1);
          djzb("允许", 1);
          djzb("同意", 1);
          djzb("允许", 1);
          djzb("继续访问", 1);
        });
      } catch (_0x15b5e0) {
        log(222);
        log(_0x15b5e0.message);
      }
      try {
        return djzb("提现"), djzb("可提现", 1), sleep(2000), djzb("立即提现", 1), "已提现";
      } catch (_0x23cd09) {
        return "未提现";
      }
    } else toastLog("未进入提现");
  }
}
function saoyis(_0x47c6dc, _0x355708) {
  if (scmsValue == "传输助手" && chuanshuzs(itemgb)) return xmpz.put("scmsValue", "传输助手"), log("传输助手模式已打开"), 1;
  for (iss = 0; iss < 8; iss++) {
    if (_0x47c6dc) {} else _0x47c6dc = 0;
    log(_0x47c6dc);
    if (_0x355708) {} else _0x355708 = 1;
    log(_0x355708);
    launchApp(yxhj);
    sleep(6000);
    try {
      try {
        允许进程.interrupt();
      } catch (_0x55d2d2) {}
      允许进程 = threads.start(function () {
        sleep(2000);
        log("点击微信");
        djzb("微信", 1, _0x47c6dc, 6) ? toastLog("已点击微信") : toastLog("未点击微信");
      });
    } catch (_0x4e2ae8) {
      log(_0x4e2ae8.message);
    }
    log("开始扫一扫");
    context.startActivity(app.intent({
      "action": "VIEW",
      "className": "com.tencent.mm.ui.LauncherUI",
      "packageName": "com.tencent.mm",
      "extras": {
        "LauncherUI.From.Scaner.Shortcut": true
      }
    }).setFlags(335544320));
    sleep(4000);
    log("相册");
    if (click("相册") || djzb("相册", 0, 0, 1000 * 8) || click("相册")) {
      sleep(1000);
      log("选图");
      if (djzb("所有图片") || click("所有图片")) {}
      sleep(2000);
      if (djzb("00jstb") || click("00jstb") || djzb("所有图片")) {}
      sleep(2000);
      var _0x389d89 = id("com.tencent.mm:id/root_view").find();
      if (djkj(_0x389d89[_0x355708 - 1]) || _0x389d89[_0x355708 - 1].click()) {} else click((130 * _0x355708 + 130) * kdxs, 350 * gdxs);
      return djzb("确定", 0, 0, 1), 1;
    } else toastLog("未点到相册");
  }
  if (chuanshuzs(itemgb)) return xmpz.put("scmsValue", "传输助手"), log("传输助手模式已打开"), 1;
  return 0;
}
function saoyis2023(_0x5d32cb, _0x52f541) {
  for (iss = 0; iss < 8; iss++) {
    if (_0x5d32cb) {} else _0x5d32cb = 0;
    log(_0x5d32cb);
    if (_0x52f541) {} else _0x52f541 = 1;
    log(_0x52f541);
    launchApp(yxhj);
    sleep(6000);
    try {
      try {
        允许进程.interrupt();
      } catch (_0x5cb230) {}
      允许进程 = threads.start(function () {
        sleep(2000);
        log("点击微信");
        djzb("微信", 1, _0x5d32cb, 6) ? toastLog("已点击微信") : toastLog("未点击微信");
      });
    } catch (_0xaa5846) {
      log(_0xaa5846.message);
    }
    log("开始扫一扫");
    context.startActivity(app.intent({
      "action": "VIEW",
      "className": "com.tencent.mm.ui.LauncherUI",
      "packageName": "com.tencent.mm",
      "extras": {
        "LauncherUI.From.Scaner.Shortcut": true
      }
    }).setFlags(335544320));
    sleep(4000);
    log("相册");
    if (click("相册") || djzb("相册", 0, 0, 1000 * 8) || click("相册")) {
      sleep(1000);
      log("选图");
      if (djzb("所有图片") || click("所有图片")) {}
      sleep(2000);
      if (djzb("00jstb") || click("00jstb") || djzb("所有图片")) {}
      sleep(2000);
      var _0x597e01 = id("com.tencent.mm:id/root_view").find();
      if (djkj(_0x597e01[_0x52f541 - 1]) || _0x597e01[_0x52f541 - 1].click()) {} else click((130 * _0x52f541 + 130) * kdxs, 350 * gdxs);
      return djzb("确定", 0, 0, 1), 1;
    } else toastLog("未点到相册");
  }
  return 0;
}
function gbapp(_0x4cdc12) {
  try {
    home();
    sleep(500);
    toastLog("先关闭APP" + _0x4cdc12);
    var _0x2887fb = getPackageName(_0x4cdc12);
    if (!_0x2887fb) return toastLog("未发现安装包，跳过本过程"), 0;
    app.openAppSetting(_0x2887fb);
    toastLog("打开关闭设置");
    sleep(6000);
    let _0x664079 = textMatches(/(.*强行.*|.*停止.*|.*结束.*|.*关闭.*|.*立即.*)/).find();
    if (_0x664079) {
      for (var _0xb6a83 of _0x664079) {
        log(1);
        try {
          click(_0xb6a83.bounds().centerX(), _0xb6a83.bounds().centerY());
        } catch (_0x47dce0) {
          log(11);
        }
        sleep(1000);
      }
      _0x664079 = textMatches(/(.*确定.*|.*强行.*|.*停止.*|.*结束.*|.*关闭.*|.*立即.*)/).find();
      for (var _0xb6a83 of _0x664079) {
        log(2);
        try {
          click(_0xb6a83.bounds().centerX(), _0xb6a83.bounds().centerY());
        } catch (_0x25c007) {
          log(11);
        }
        sleep(1000);
      }
      sleep(2000);
    } else toastLog(app.getAppName(_0x2887fb) + "未在运行，不能关闭APP");
    sleep(100);
    back();
    sleep(100);
    back();
    sleep(100);
    home();
    sleep(100);
  } catch (_0x28436d) {
    log(_0x28436d.massage());
  }
}
function huisy(_0x54b71b, _0x59e259) {
  if (_0x59e259) {} else _0x59e259 = apmc;
  appka = getPackageName(_0x59e259);
  for (icc = 1; icc < 8; icc++) {
    var _0x56db74 = text(_0x54b71b).packageName(appka).findOne(1000);
    if (_0x56db74 != null) return 1;else back(), sleep(3000);
    return 0;
  }
}
function formatDate(_0x27d544, _0x26cc62) {
  typeof _0x27d544 !== "object" && (_0x27d544 = new Date(_0x27d544));
  var _0x47bea9 = function (_0x4093dd) {
    return _0x4093dd < 10 ? "0" + _0x4093dd : _0x4093dd;
  };
  return _0x26cc62.replace(/^YYYY|MM|DD|hh|mm|ss/g, function (_0x5f11fb) {
    switch (_0x5f11fb) {
      case "YYYY":
        return _0x47bea9(_0x27d544.getFullYear());
      case "MM":
        return _0x47bea9(_0x27d544.getMonth() + 1);
      case "mm":
        return _0x47bea9(_0x27d544.getMinutes());
      case "DD":
        return _0x47bea9(_0x27d544.getDate());
      case "hh":
        return _0x47bea9(_0x27d544.getHours());
      case "ss":
        return _0x47bea9(_0x27d544.getSeconds());
    }
  });
}
function unlock() {
  let _0xe86f8 = 0;
  try {
    if (!device.isScreenOn()) {
      _0xe86f8 = 1;
      log(jiesuo);
      log(typeof jiesuo);
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(150, 190));
      sleep(1500);
      var _0x3e42c9 = jiesuo;
      for (var _0x3fcea3 = 0; _0x3fcea3 < _0x3e42c9.length; _0x3fcea3++) {
        log(_0x3e42c9[_0x3fcea3]);
        var _0x1ebbb8 = text(_0x3e42c9[_0x3fcea3]).findOne(2000).bounds();
        click(_0x1ebbb8.centerX(), _0x1ebbb8.centerY());
        sleep(100);
      }
      return 1;
    } else return 1;
  } catch (_0x345e3e) {
    log("解锁错误，尝试中...");
  }
  try {
    if (_0xe86f8) {
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(201, 238));
      sleep(1500);
      var _0x3e42c9 = jiesuo;
      for (var _0x3fcea3 = 0; _0x3fcea3 < _0x3e42c9.length; _0x3fcea3++) {
        log(_0x3e42c9[_0x3fcea3]);
        var _0x1ebbb8 = text(_0x3e42c9[_0x3fcea3]).findOne(2000).bounds();
        click(_0x1ebbb8.centerX(), _0x1ebbb8.centerY());
        sleep(100);
      }
      return 1;
    }
  } catch (_0x5a9426) {
    log("解锁错误，尝试中...");
  }
  try {
    if (_0xe86f8) {
      device.wakeUp();
      sleep(500);
      swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(500, 1000));
      sleep(1500);
      var _0x3e42c9 = jiesuo;
      for (var _0x3fcea3 = 0; _0x3fcea3 < _0x3e42c9.length; _0x3fcea3++) {
        log(_0x3e42c9[_0x3fcea3]);
        var _0x1ebbb8 = text(_0x3e42c9[_0x3fcea3]).findOne(2000).bounds();
        click(_0x1ebbb8.centerX(), _0x1ebbb8.centerY());
        sleep(100);
      }
      return 1;
    }
  } catch (_0x23ca7c) {
    log("解锁错误，尝试中...");
  }
}
function hdhs(_0x339f4d) {
  var _0x5220f6 = device.width,
    _0x897e1a = device.height;
  if (_0x339f4d == "" || _0x339f4d == undefined || _0x339f4d == "s") log("屏幕向上随机滑动"), swipe(_0x5220f6 * 0.6 - random(10, 30), _0x897e1a * 0.7 + random(10, 20), _0x5220f6 * 0.6 + random(50, 80), _0x897e1a * 0.4 + random(10, 30), random(220, 235));else {
    if (_0x339f4d == "z") log("屏幕向左随机滑动"), swipe(_0x5220f6 * 0.8 - random(10, 30), _0x897e1a * 0.5 + random(10, 20), _0x5220f6 * 0.3 + random(50, 80), _0x897e1a * 0.5 + random(10, 30), random(220, 235));else {
      if (_0x339f4d == "y") log("屏幕向右随机滑动"), swipe(_0x5220f6 * 0.3 - random(10, 30), _0x897e1a * 0.5 + random(10, 20), _0x5220f6 * 0.8 + random(50, 80), _0x897e1a * 0.5 + random(10, 30), random(220, 235));else (_0x339f4d == "x" || _0x339f4d == 1) && (log("屏幕向下随机滑动"), swipe(_0x5220f6 * 0.6 - random(10, 30), _0x897e1a * 0.4 + random(10, 20), _0x5220f6 * 0.6 + random(50, 80), _0x897e1a * 0.7 + random(10, 30), random(220, 235)));
    }
  }
}
function gbtc() {
  关闭弹窗 = threads.start(function () {
    if (auto.service != null) {
      var _0x1f4ad6 = 0,
        _0x3324aa = 0,
        _0x12c58d = 0;
      while (true) {
        let _0xce1e29 = textMatches(/(.*立即.*|.*邀请.*|.*暂不.*|.*坚持.*|.*知道了.*|.*查看更多.*|.*看广告.*|.*放弃奖励.*)/).findOne(1000);
        _0xce1e29 && (click(_0xce1e29.bounds().centerX(), _0xce1e29.bounds().centerY()), sleep(1000));
        let _0x4b6ca7 = textMatches(/(立即开始|拒绝|暂不使用|放弃奖励|立即邀请|坚持退出|我知道了|以后再说|同意|上滑查看更多视频|依次点击文字:|请完成下列验证后继续:|拖动滑块，完成拼图)/).findOne(2 * 1000);
        if (_0x4b6ca7) {
          djzb();
          Allow_text = _0x4b6ca7.text();
          if ("依次点击文字:" == Allow_text) {
            if (0 == _0x1f4ad6) Allow_1 = _0x4b6ca7.depth();else {
              if (Allow_1 === _0x4b6ca7.depth()) {} else {}
            }
            _0x1f4ad6++;
          } else {
            if ("请完成下列验证后继续:" == Allow_text) {
              if (0 == _0x3324aa) Allow_2 = _0x4b6ca7.depth();else {
                if (Allow_2 === _0x4b6ca7.depth()) {} else {}
              }
              _0x3324aa++;
            } else {
              if ("拖动滑块，完成拼图" == Allow_text) {
                if (0 == _0x12c58d) Allow_3 = _0x4b6ca7.depth();else {
                  if (Allow_3 === _0x4b6ca7.depth()) {} else {}
                }
                _0x12c58d++;
              } else {
                if ("上滑查看更多视频" == Allow_text) {
                  swipe(random(device.width / 2 - 50, device.width / 2 + 50), random(device.height / 2 + 200, device.height / 2 + 300), random(device.width / 2 + 50, device.width / 2 + 100), random(50, 100), 700);
                  sleep(random(500, 1000));
                  swipe(random(device.width / 2 - 50, device.width / 2 + 50), random(device.height / 2 + 200, device.height / 2 + 300), random(device.width / 2 + 50, device.width / 2 + 100), random(50, 100), 700);
                  sleep(random(500, 1000));
                  toastLog("上滑");
                } else _0x4b6ca7.click(), log("关闭" + _0x4b6ca7.text() + "弹窗");
              }
            }
          }
        }
      }
    }
  });
  关闭弹窗.join(5 * 1000);
  关闭弹窗.interrupt();
}
function registerKey() {
  events.observeKey();
  events.onKeyDown("volume_down", function (_0x5567b9) {
    engines.stopAllAndToast();
  });
}
function huisy(_0x1db3e7, _0x57092f, _0x128f7f) {
  if (_0x57092f) {} else _0x57092f = apmc;
  appka = getPackageName(_0x57092f);
  for (icc = 1; icc < 8; icc++) {
    if (_0x128f7f) var _0x151121 = textContains(_0x1db3e7).packageName(appka).findOne(1000);else var _0x151121 = text(_0x1db3e7).packageName(appka).findOne(1000);
    if (_0x151121 != null) return 1;else back(), sleep(qjyc + 3000);
    return 0;
  }
}
function djzbwb(_0x3febfb, _0x2daaab, _0x10a3ab) {
  if (_0x10a3ab > 0) {
    sleep(3000);
    switch (_0x2daaab) {
      case 1:
        var _0x35ff7f = textContains(_0x3febfb).findOnce(_0x10a3ab);
        break;
      case 2:
        var _0x35ff7f = id(_0x3febfb).findOnce(_0x10a3ab);
        break;
      case 3:
        var _0x35ff7f = descContains(_0x3febfb).findOnce(2000);
        break;
      default:
        var _0x35ff7f = text(_0x3febfb).findOnce(_0x10a3ab);
    }
  } else switch (_0x2daaab) {
    case 1:
      var _0x35ff7f = textContains(_0x3febfb).findOne(2000);
      break;
    case 2:
      var _0x35ff7f = id(_0x3febfb).findOne(3000);
      break;
    case 3:
      var _0x35ff7f = descContains(_0x3febfb).findOne(2000);
      break;
    default:
      var _0x35ff7f = text(_0x3febfb).findOne(2000);
  }
  xzsj = 3;
  if (_0x35ff7f != null) {
    var _0x5607c2 = _0x35ff7f.bounds();
    return click(_0x5607c2.centerX(), _0x5607c2.centerY()), log("执行点击"), 1;
  } else return log("未点击"), 0;
}
function dkapp(_0x3a2530) {
  var _0x519825 = 1;
  dkappk = getPackageName(_0x3a2530);
  if (!dkappk) return toastLog("未发现" + _0x3a2530 + "安装包，此过程终止！"), 0;
  while (_0x519825 < 9) {
    sleep(qjyc + 2000);
    log(launchApp(_0x3a2530));
    toastLog("等待打开");
    djzb("允许");
    djzb("跳过", 1);
    c = packageName(dkappk).findOne(4000);
    if (c != null) return toastLog("已加载APP,未识别到双开"), 1;else {
      toastLog("正尝试打开APP，如双开则自动选择APP");
      shuangkcs == 0 ? djzbwb(_0x3a2530, 0, 0) : djzbwb(_0x3a2530, 0, 1);
      sleep(qjyc + 2000);
    }
    djzb("跳过", 1);
    sleep(qjyc + 2000);
    djzb("允许");
    c = packageName(dkappk).findOne(7000);
    if (c != null) return toastLog("第" + _0x519825 + "次尝试打开APP成功"), 1;else _0x519825++, toastLog("第" + _0x519825 + "次尝试打开APP失败，最多重试8次，正尝试再次打开"), launchApp(yxhj), packageName(getPackageName(yxhj)).findOne(5000);
  }
  return c != null ? (toastLog("已成功打开APP" + _0x3a2530), sleep(qjyc + 5000), 1) : (toastLog("未能打开APP" + _0x3a2530), 0);
}
function djkj(_0x27585e, _0x460e5b, _0x402e35, _0x24d754) {
  var _0x35cc22 = 10,
    _0x2c5714 = 10;
  if (_0x402e35) {} else _0x402e35 = 0;
  if (_0x24d754) {} else _0x24d754 = 0;
  if (_0x27585e) {
    var _0x1b6769 = _0x27585e.bounds();
    if (_0x460e5b == 1) _0x35cc22 = Math.max(_0x1b6769.right, 10), _0x2c5714 = Math.max(_0x1b6769.centerY(), 10);else {
      if (_0x460e5b == 2) _0x35cc22 = Math.max(_0x1b6769.right, 10), _0x2c5714 = Math.max(_0x1b6769.centerY(), 10);else {
        if (_0x460e5b == 3) _0x35cc22 = Math.max(_0x1b6769.centerX(), 10), _0x2c5714 = Math.max(_0x1b6769.top, 10);else _0x460e5b == 4 ? (_0x35cc22 = Math.max(_0x1b6769.centerX(), 10), _0x2c5714 = Math.max(_0x1b6769.bottom, 10)) : (_0x35cc22 = Math.max(_0x1b6769.centerX(), 10), _0x2c5714 = Math.max(_0x1b6769.centerY(), 10));
      }
    }
    click(_0x35cc22 + _0x402e35, _0x2c5714 + _0x24d754);
    log("找到控件，执行点击koj");
    return 1;
  } else return log("未找到控件，未点击"), 0;
}
function yinl0() {
  try {
    device.setMusicVolume(0);
    toastLog("成功设置媒体音量为0");
  } catch (_0x5d9d2b) {
    alert("首先需要开启权限，请开启后再次运行脚本");
    exit();
  }
}
function dateFormat(_0x19b5a1, _0x507fd8) {
  var _0x3f59ef = {
    "M+": _0x19b5a1.getMonth() + 1,
    "d+": _0x19b5a1.getDate(),
    "h+": _0x19b5a1.getHours(),
    "m+": _0x19b5a1.getMinutes(),
    "s+": _0x19b5a1.getSeconds(),
    "q+": Math.floor((_0x19b5a1.getMonth() + 3) / 3),
    "S": _0x19b5a1.getMilliseconds()
  };
  if (/(y+)/.test(_0x507fd8)) _0x507fd8 = _0x507fd8.replace(RegExp.$1, (_0x19b5a1.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var _0x515631 in _0x3f59ef) if (new RegExp("(" + _0x515631 + ")").test(_0x507fd8)) _0x507fd8 = _0x507fd8.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x3f59ef[_0x515631] : ("00" + _0x3f59ef[_0x515631]).substr(("" + _0x3f59ef[_0x515631]).length));
  return _0x507fd8;
}
function gbapp(_0x3a7a48) {
  try {
    home();
    sleep(qjyc + 500);
    toastLog("先关闭APP" + _0x3a7a48);
    var _0x56eec9 = getPackageName(_0x3a7a48);
    if (!_0x56eec9) return toastLog("未发现安装包，跳过本过程"), 0;
    app.openAppSetting(_0x56eec9);
    toastLog("打开关闭设置");
    sleep(qjyc + 6000);
    let _0x2f1ec = textMatches(/(.*强行.*|.*停止.*|.*结束.*|.*关闭.*|.*立即.*)/).find();
    if (_0x2f1ec) {
      for (var _0x4453c1 of _0x2f1ec) {
        log(1);
        try {
          click(_0x4453c1.bounds().centerX(), _0x4453c1.bounds().centerY());
        } catch (_0x33cff9) {
          log(11);
        }
        sleep(qjyc + 1000);
      }
      _0x2f1ec = textMatches(/(.*确定.*|.*强行.*|.*停止.*|.*结束.*|.*关闭.*|.*立即.*)/).find();
      for (var _0x4453c1 of _0x2f1ec) {
        ww = _0x4453c1.text().toString();
        if (ww.indexOf("悬浮窗") > 0) continue;
        try {
          click(_0x4453c1.bounds().centerX(), _0x4453c1.bounds().centerY());
        } catch (_0x57eef2) {
          log(11);
        }
        sleep(qjyc + 1000);
      }
      sleep(qjyc + 2000);
    } else toastLog(app.getAppName(_0x56eec9) + "未在运行，不能关闭APP");
    sleep(qjyc + 100);
    back();
    sleep(qjyc + 100);
    back();
    sleep(qjyc + 100);
    home();
    sleep(qjyc + 100);
  } catch (_0xca6762) {
    log(_0xca6762.massage());
  }
}
function suoyouappjh() {
  var _0x5c6cca = [];
  intent = new Intent();
  intent.setAction(Intent.ACTION_MAIN);
  intent.addCategory(Intent.CATEGORY_LAUNCHER);
  packageManager = context.getPackageManager();
  resolveInfos = packageManager.queryIntentActivities(intent, 0);
  for (var _0xf067d2 = 0; _0xf067d2 < resolveInfos.size(); _0xf067d2++) {
    appNamea = resolveInfos.get(_0xf067d2).loadLabel(packageManager).toString();
    log(appNamea);
    _0x5c6cca.push(appNamea);
  }
  return _0x5c6cca;
}
function xiezaiapp(_0xddd006, _0x5ebbf4) {
  var _0x370c84 = getPackageName(_0xddd006);
  if (!_0x370c84) return toastLog("跳过卸载，未安装APP:" + _0xddd006), 1;
  if (_0x5ebbf4) {} else _0x5ebbf4 = 0;
  if (_0x5ebbf4 == 0 || _0x5ebbf4 == 1) {
    try {
      toastLog("尝试模式1卸载");
      app.uninstall(_0x370c84);
      sleep(2000);
      if (text(_0xddd006).findOne(2000) && textContains("卸载").findOne(200)) {
        if (click("确定")) toastLog("点击确定卸载");else {
          cc = text("确定").findOne(200);
          djkj(cc) && toastLog("点击卸载确定2");
        }
        sleep(3000);
        if (!_0x370c84) return toastLog("模式一卸载成功:" + _0xddd006), 1;
      }
    } catch (_0x2adb46) {
      log("模式一卸载出错");
    }
    sleep(1000);
  }
  if (!_0x370c84) return toastLog("模式一卸载成功:" + _0xddd006), 1;
  if (_0x5ebbf4 == 0 || _0x5ebbf4 == 2) {
    try {
      toastLog("尝试模式2卸载");
      app.openAppSetting(_0x370c84);
      sleep(2000);
      if (text(_0xddd006).findOne(2000) && textContains("卸载").findOne(200)) {
        cc = text("卸载").findOne(2000);
        if (djkj(cc)) {
          toastLog("点击控件卸载");
          sleep(1000);
          cc = text("卸载").boundsInside(10, gd * 2 / 3, kd, gd).findOne(2000);
          ccc = text("确定").boundsInside(10, gd * 2 / 3, kd, gd).findOne(200);
          djkj(cc) || djkj(ccc) ? toastLog("模式二卸载成功") : toastLog("模式二卸载失败");
          sleep(3000);
          if (!_0x370c84) return toastLog("模式一卸载成功:" + _0xddd006), 1;
        }
      }
    } catch (_0x24b8e4) {
      log("模式二卸载出错");
    }
  }
  return 0;
}
function erweimasb(_0x507b34) {
  runtime.loadDex("/sdcard/00jstb/erwm.dex");
  sleep(1000);
  importPackage(com.google.zxing);
  importPackage(com.google.zxing.common);
  importPackage(com.google.zxing.client.j2se);
  var _0x239cbd = images.readPixels(_0x507b34),
    _0x1119b7 = _0x239cbd.width,
    _0x1c400f = _0x239cbd.height,
    _0x4d1e71 = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(_0x1119b7, _0x1c400f, _0x239cbd.data))),
    _0x494bb7 = new MultiFormatReader().decode(_0x4d1e71);
  return _0x494bb7.getText();
}
function zuixinwj(_0x4de525, _0x31df05, _0x4b7530) {
  var _0x2a4d1f = "",
    _0x1dcbf9 = "",
    _0x309c74 = "0",
    _0x3c0470 = files.listDir(_0x4de525);
  for (var _0x317a49 = 0; _0x317a49 < _0x3c0470.length; _0x317a49++) {
    var _0x46a4f0 = _0x3c0470[_0x317a49];
    log("本次文件：" + _0x46a4f0);
    var _0x482bfa = _0x1dcbf9;
    log("上个" + _0x482bfa);
    _0x1dcbf9 = files.join(_0x4de525, _0x46a4f0);
    if (_0x46a4f0.endsWith("." + _0x31df05)) {
      var _0x441dba = java.io.File(_0x1dcbf9);
      bwjsjc = _0x441dba.lastModified();
      if (parseInt(bwjsjc) > parseInt(_0x309c74)) {
        _0x4b7530 && (files.remove(_0x482bfa), log("删除上个文件：" + _0x482bfa));
        _0x2a4d1f = _0x1dcbf9;
      } else _0x4b7530 && (files.remove(_0x1dcbf9), log("删除旧文件：" + _0x1dcbf9));
      _0x309c74 = bwjsjc;
    }
  }
  return log("文件名：" + _0x2a4d1f), _0x2a4d1f;
}
function peizhixiazai(_0x1ed5ff, _0x1e505b, _0x5175c8) {
  if (_0x5175c8) {} else _0x5175c8 = "/sdcard/00jstb/";
  var _0x33fb56 = images.load(_0x1ed5ff);
  if (_0x33fb56 != null) {
    toast("请求成功");
    try {
      files.create(_0x5175c8);
    } catch (_0x3a4906) {
      log(_0x3a4906.message);
    }
    var _0x58e020 = _0x5175c8 + _0x1e505b + ".jpg";
    images.save(_0x33fb56, _0x58e020, "jpg", 100);
    media.scanFile(_0x58e020);
    return 1;
  } else return toast("请求失败!"), 0;
}
function xiazwj(_0x230607, _0x5c87e1) {
  if (_0x5c87e1) {} else _0x5c87e1 = "/sdcard/00jstb/下载错误.null";
  var _0x122a97 = http.get(_0x230607);
  _0x122a97.statusCode != 200 ? toastLog("配置下载失败,请检查网络后重试") : (toastLog(":配置下载下载中...."), files.write(_0x5c87e1, _0x122a97.body.string()));
}
function zhaotudj(_0x13cb8a, _0x30688f, _0x26b5cf, _0x13899d, _0x566454, _0x10ba76, _0x4783a1, _0x1b1119) {
  if (_0x30688f) {} else _0x30688f = 0.8;
  if (_0x26b5cf) {} else _0x26b5cf = 0;
  if (_0x13899d) {} else _0x13899d = 0;
  if (_0x566454) {} else _0x566454 = kd;
  if (_0x10ba76) {} else _0x10ba76 = gd;
  if (_0x4783a1) {} else _0x4783a1 = 10;
  if (_0x1b1119) {} else _0x1b1119 = 20;
  var _0x46e065 = images.read(_0x13cb8a),
    _0x46a126 = jietu(2),
    _0xf9f782 = findImage(_0x46a126, _0x46e065, {
      "region": [_0x26b5cf, _0x13899d, _0x566454, _0x10ba76],
      "threshold": _0x30688f
    });
  return _0xf9f782 ? (log(_0xf9f782), log("找到点击图片" + _0x13cb8a), click(_0xf9f782.x + _0x4783a1, _0xf9f782.y + _0x1b1119), 1) : (log("未找到点击图片" + _0x13cb8a), 0);
}
function erweima2(_0x3171f2, _0x13df85) {
  var _0x2671f6 = formatDate(new Date(), "YYYY-MM-DD-hh-mm-ss");
  !_0x3171f2 && (_0x3171f2 = "abc");
  !_0x13df85 && (_0x13df85 = "tyewm" + _0x2671f6);
  var _0x447e24 = "http://api.lykep.com/api/qrcode?frame=1&e=L&size=200&text=" + _0x3171f2,
    _0x15698b = images.load(_0x447e24);
  if (_0x15698b != null) {
    toastLog("请求成功");
    try {
      files.create("/sdcard/00jstb/");
    } catch (_0x1e27b8) {
      log(_0x1e27b8.message);
    }
    var _0x4a6e8d = "/sdcard/00jstb/" + _0x13df85 + ".png";
    log(_0x4a6e8d);
    images.save(_0x15698b, _0x4a6e8d, "png", 100);
    media.scanFile(_0x4a6e8d);
    return _0x4a6e8d;
  } else return toastLog("二维码转码请求失败，继续尝试!"), 0;
}
function erweima(_0x1bfedf, _0x12dc89) {
  var _0x4364cc = formatDate(new Date(), "YYYY-MM-DD-hh-mm-ss");
  !_0x1bfedf && (_0x1bfedf = "abc");
  !_0x12dc89 && (_0x12dc89 = "tyewm" + _0x4364cc);
  var _0x498661 = "https://v2.alapi.cn/api/qr?content=" + _0x1bfedf,
    _0x4df72f = images.load(_0x498661);
  if (_0x4df72f != null) {
    toastLog("请求成功");
    try {
      files.create("/sdcard/00jstb/");
    } catch (_0x17a74f) {
      log(_0x17a74f.message);
    }
    var _0x3f2b69 = "/sdcard/00jstb/" + _0x12dc89 + ".png";
    return images.save(_0x4df72f, _0x3f2b69, "png", 100), media.scanFile(_0x3f2b69), log(_0x3f2b69), _0x3f2b69;
  } else {
    toastLog("请求地址1失败!");
    if (cc = erweima2(_0x1bfedf, _0x12dc89)) return cc;
    return 0;
  }
}
function jietu(_0x4eab52) {
  try {
    if (!_0x4eab52 || _0x4eab52 == 1) {
      var _0x2b4594 = formatDate(new Date(), "YYYY-MM-DD-hh-mm-ss"),
        _0x1cae48 = "Screenshot_" + _0x2b4594 + ".png",
        _0x234f1e = "/sdcard/00js/" + _0x1cae48;
      captureScreen(_0x234f1e);
      log("成功截图");
      var _0x13280e = images.read(_0x234f1e);
      images.save(_0x13280e, _0x234f1e, "png", 2);
      toastLog("压缩成功");
      media.scanFile(_0x234f1e);
      log(222);
      _0x4eab52 ? (_0x4eab52 = _0x234f1e, log("返回名称及地址")) : (_0x4eab52 = _0x1cae48, log("返回名称"));
    } else _0x4eab52 = images.captureScreen();
    return _0x4eab52;
  } catch (_0x3d4484) {
    return log("截图失败"), log(322), log(_0x3d4484.message), 0;
  }
}
function jietuquanx() {
  try {
    try {
      try {
        允许进程.interrupt();
      } catch (_0x840639) {}
      允许进程 = threads.start(function () {
        var _0x43e646 = className("android.widget.Button").textMatches(/允许|立即开始|统一|START NOW/).findOne(5000);
        _0x43e646 ? (sleep(qjyc + 1000), _0x43e646.click()) : "未发现申请";
      });
    } catch (_0x5857ce) {
      log(122);
      log(_0x5857ce.message);
    }
    log("开始申请截图权限");
    try {
      try {
        权限进程.interrupt();
      } catch (_0x31a7fb) {}
      权限进程 = threads.start(function () {
        !requestScreenCapture() ? toast("请求截图失败") : toast("请求截图成功");
      });
    } catch (_0xd8a7ae) {
      log(222);
      log(_0xd8a7ae.message);
    }
    权限进程.join(5000);
    log(1);
  } catch (_0x383bd7) {}
}
function djzb(_0x2ed711, _0x36df1a, _0x2e8942, _0xb99574) {
  if (_0xb99574) {} else _0xb99574 = 3000;
  if (_0x2e8942 > 0) {
    sleep(_0xb99574);
    switch (_0x36df1a) {
      case 1:
        var _0x4febde = textContains(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOnce(_0x2e8942);
        break;
      case 2:
        var _0x4febde = id(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOnce(_0x2e8942);
        break;
      case 3:
        var _0x4febde = descContains(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOnce(_0x2e8942);
        break;
      default:
        var _0x4febde = text(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOnce(_0x2e8942);
    }
  } else switch (_0x36df1a) {
    case 1:
      var _0x4febde = textContains(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOne(_0xb99574);
      break;
    case 2:
      var _0x4febde = id(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOne(_0xb99574);
      break;
    case 3:
      var _0x4febde = descContains(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOne(_0xb99574);
      break;
    default:
      var _0x4febde = text(_0x2ed711).boundsInside(0, 0, kd + 1, gd - 1).findOne(_0xb99574);
  }
  _0xb99574 = 3;
  if (_0x4febde != null) {
    sleep(1000);
    var _0x2acfe6 = _0x4febde.bounds();
    log(Math.max(_0x2acfe6.centerX(), 10), Math.max(_0x2acfe6.centerY(), 10));
    click(Math.max(_0x2acfe6.centerX(), 10), Math.max(_0x2acfe6.centerY(), 10));
    log("执行点击");
    log(_0x2acfe6.left, _0x2acfe6.top, _0x2acfe6.right, _0x2acfe6.bottom);
    return [_0x2acfe6.left, _0x2acfe6.top, _0x2acfe6.right, _0x2acfe6.bottom];
  } else return log("未点击"), 0;
}