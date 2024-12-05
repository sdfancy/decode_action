//Thu Dec 05 2024 05:07:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("常规店铺签到监控");
const jdCookie = require("./jdCookie");
const notify = require("./utils/Rebels_sendJDNotify");
const common = require("./utils/Rebels_jdCommon");
const {
  H5st,
  jsTk
} = require("./utils/Rebels_H");
let token = process.env.jd_dpqd_single_token || "";
let accountThreads = process.env.jd_dpqd_account_threads || "1";
const runInterval = process.env.jd_dpqd_account_interval || "1000";
let signHotMaxRetryTimes = process.env.jd_dpqd_max_retry || "0";
const isNotify = process.env.jd_dpqd_notify === "true";
const activityUrl = "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + token;
const signStatusMessages = {
  403030023: "今日已签",
  404130026: "已达到签到上限",
  407100001: "活动尚未开始",
  407100002: "活动已经结束",
  407000007: "账号无效",
  402: "活动无效",
  "-1": "服务器繁忙"
};
const cookiesArr = Object.keys(jdCookie).map(_0x2dfd6c => jdCookie[_0x2dfd6c]).filter(_0x25d1ad => _0x25d1ad);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  try {
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("活动令牌: [" + token + "]");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("间隔时长: [" + runInterval / 1000 + "秒]运行间隔时长");
    console.log("签到火爆时的最大重试次数: [" + signHotMaxRetryTimes + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    notify.config({
      title: $.name
    });
    if (!token) {
      console.log("⚠ 请先定义必要的环境变量后再运行脚本！");
      return;
    }
    $.waitTime = null;
    if (runInterval) {
      try {
        const _0x7233 = parseInt(runInterval);
        _0x7233 >= 0 && ($.waitTime = _0x7233);
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    try {
      const _0x5166db = parseInt(signHotMaxRetryTimes);
      signHotMaxRetryTimes = _0x5166db > 0 ? _0x5166db : 0;
    } catch {
      signHotMaxRetryTimes = 3;
    }
    try {
      const _0x1c21a8 = parseInt(accountThreads);
      _0x1c21a8 > 0 && _0x1c21a8 !== 1 && (accountThreads = _0x1c21a8);
    } catch {
      accountThreads = 1;
    }
    await Main();
    isNotify && notify.getMessage() && (await notify.push());
  } catch (_0x52ccd8) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x52ccd8);
  }
})().catch(_0x1b194d => $.logErr(_0x1b194d)).finally(() => $.done());
async function Main() {
  let _0xb871c7 = true;
  token.includes(":") && token.split(":").length === 3 && (token = token.split(":")[0]);
  if (token.length !== 32 || !/^[A-Z0-9]*$/.test(token)) {
    console.log("❌ 令牌格式错误");
    return;
  }
  $.token = token;
  $.UA = common.genUA("刘强东");
  ({
    jsToken: $.jsToken
  } = await jsTk($.UA, "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html", {
    bizId: "SJHT-DPQDH5",
    v: "3.2.1.0",
    qs: "token=" + $.token
  }));
  let _0x307fc0 = 0;
  $.getActivityInfo = "";
  $.invalidAct = false;
  const _0x57c08a = 10;
  while (!$.getActivityInfo && _0x307fc0 < _0x57c08a && !$.invalidAct) {
    $.getActivityInfo = "";
    await sendRequest("getActivityInfo");
    await $.wait(1000);
    _0x307fc0++;
    _0x307fc0 === _0x57c08a && (console.log($.errMsg || "❌ 获取活动信息失败"), $.errMsg = "");
  }
  if (!$.getActivityInfo) {
    return;
  }
  $.venderId = $.getActivityInfo.venderId;
  $.activityId = $.getActivityInfo.id;
  if (!$.venderId || !$.activityId || $.invalidAct) {
    return;
  }
  const _0x4b6edb = $.getActivityInfo.activityStatus;
  const _0x235c27 = $.getActivityInfo.continuePrizeRuleList || [];
  const _0x32c534 = $.getActivityInfo.prizeRuleList || [];
  const _0x61599d = $.getActivityInfo.startTime;
  const _0x548e0c = $.getActivityInfo.endTime;
  const _0x105663 = $.time("yyyy-MM-dd HH:mm", _0x61599d);
  const _0x187d1c = $.time("yyyy-MM-dd HH:mm", _0x548e0c);
  let _0x32a588 = false;
  const _0x1c326f = [];
  const _0x1b6d31 = [..._0x32c534, ..._0x235c27];
  for (const _0x24b2eb of _0x1b6d31) {
    const _0x386ef8 = _0x24b2eb.level;
    const _0x5afd9e = _0x24b2eb.prizeList || [];
    const _0x36373a = [];
    for (const _0x4e9834 of _0x5afd9e) {
      let _0x16e2a3 = "";
      const _0x369605 = _0x4e9834.discount;
      const _0x2b96cd = _0x4e9834.type;
      const _0x2de9d6 = _0x4e9834.number;
      const _0x43210d = _0x4e9834.status;
      const _0x4a5dda = _0x43210d === 5;
      switch (_0x2b96cd) {
        case 1:
          _0x16e2a3 = "优惠券";
          break;
        case 4:
          _0x16e2a3 = _0x369605 + "京豆";
          break;
        case 6:
          _0x16e2a3 = _0x369605 + "店铺积分";
          break;
        case 9:
          _0x16e2a3 = "" + _0x4e9834?.["interactPrizeSkuList"][0]?.["skuName"];
          break;
        case 10:
          _0x16e2a3 = _0x369605 + "元E卡";
          break;
        case 14:
          _0x16e2a3 = _0x369605 / 100 + "元红包";
          break;
        default:
          _0x16e2a3 = "未知奖品（" + _0x2b96cd + "）";
      }
      if (![1, 6].includes(_0x2b96cd) && !_0x4a5dda) {
        _0x32a588 = true;
      }
      _0x36373a.push(_0x16e2a3 + "（共" + _0x2de9d6 + "份" + (_0x4a5dda ? "，已发完" : "") + "）");
    }
    _0x1c326f.push({
      days: _0x386ef8,
      prize: _0x36373a,
      havePrize: _0x32a588
    });
  }
  const _0x36eb8a = await common.getShopName({
    venderId: $.venderId
  });
  console.log((_0x36eb8a ? "店铺名称：#" + _0x36eb8a + "\n" : "") + "开始时间：" + _0x105663 + "\n结束时间：" + _0x187d1c);
  notify.appendContent((_0x36eb8a ? "\n【店铺名称】#" + _0x36eb8a : "") + "\n【开始时间】" + _0x105663 + "\n【结束时间】" + _0x187d1c);
  _0x1c326f.length > 0 && (console.log(_0x1c326f.map(_0x310496 => (_0x310496.days === 0 ? "每日签到" : "连续" + (_0x310496.days < 10 ? " " : "") + _0x310496.days + "天") + "：" + _0x310496.prize.join("，")).join("\n")), notify.appendContent("\n" + _0x1c326f.map(_0x55ae8f => "【" + (_0x55ae8f.days === 0 ? "每日签到" : "连续" + (_0x55ae8f.days < 10 ? " " : "") + _0x55ae8f.days + "天") + "】" + _0x55ae8f.prize.join("，")).join("\n")));
  console.log("");
  notify.appendContent("\n\n" + activityUrl);
  const _0x58a6a2 = Date.now();
  _0x61599d && _0x58a6a2 < _0x61599d && (console.log("活动将在 " + _0x105663 + " 开始，晚点再来吧~\n"), _0xb871c7 = false);
  if (_0x548e0c && _0x58a6a2 > _0x548e0c) {
    console.log("活动已于 " + _0x187d1c + " 结束，下次早点来吧~\n");
    _0xb871c7 = false;
  } else {
    _0x4b6edb === 3 && (console.log("活动已结束\n"), _0xb871c7 = false);
  }
  !_0x32a588 && (_0xb871c7 = false);
  _0x1c326f.length > 0 && ($.minLevel = _0x1c326f[0].days, $.maxLevel = _0x1c326f[_0x1c326f.length - 1].days);
  if (!_0xb871c7) {
    return;
  }
  await common.concTask(accountThreads, cookiesArr, async (_0x24cf61, _0x5485b8) => {
    await concMain(_0x24cf61, _0x5485b8);
    if ($.waitTime) {
      await $.wait($.waitTime);
    }
  });
}
async function concMain(_0x5b8553, _0x3231c1) {
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  const _0x55a151 = decodeURIComponent(common.getCookieValue(_0x5b8553, "pt_pin"));
  const _0x1d44a1 = "【账号" + _0x3231c1 + "】" + _0x55a151 + "：";
  const _0x1962bf = notify.create(_0x3231c1, _0x55a151);
  const _0x4586d5 = await common.getLoginStatus(_0x5b8553);
  if (!_0x4586d5 && typeof _0x4586d5 === "boolean") {
    console.log(_0x1d44a1 + "🚫 账号无效");
    _0x1962bf.fix("账号无效");
    return;
  }
  const _0x52be19 = common.genUA(_0x55a151);
  const {
    jsToken: _0x3af01c
  } = await jsTk(_0x52be19, "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html", {
    bizId: "SJHT-DPQDH5",
    v: "3.2.1.0",
    qs: "token=" + $.token
  });
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  let _0x36a833 = "";
  let _0x197b84 = [];
  let _0x515409 = false;
  await _0x135fe5("signCollectGift");
  if ($.waitTime) {
    await $.wait($.waitTime);
  }
  if (_0x515409 && signHotMaxRetryTimes > 0) {
    let _0x3860f3 = 0;
    while (_0x3860f3 < signHotMaxRetryTimes) {
      if ($.runEnd) {
        return {
          runEnd: true
        };
      }
      await _0x135fe5("signCollectGift");
      if (!_0x515409) {
        break;
      }
      if ($.waitTime) {
        await $.wait($.waitTime);
      }
      _0x3860f3++;
    }
  }
  if (_0x36a833) {
    await _0x135fe5("getSignRecord");
    const _0x524810 = "" + _0x36a833 + (_0x197b84.length > 0 ? "（" + _0x197b84.join("，") + "）" : "");
    console.log("" + _0x1d44a1 + _0x524810);
    _0x1962bf.fix(_0x524810.replace("✅", "").replace("❌", "").replace("🚫", "").trim());
  }
  function _0xfb39e3(_0x320916, _0x8d4b3c) {
    try {
      switch (_0x320916) {
        case "signCollectGift":
          if (_0x8d4b3c.code === 200 && _0x8d4b3c.success === true) {
            const _0x136835 = [];
            if (_0x8d4b3c.data && _0x8d4b3c.data.length > 0) {
              for (const _0x4834d1 of _0x8d4b3c.data) {
                const _0x23901d = _0x4834d1?.["prizeList"] || [];
                for (const _0x3c868a of _0x23901d) {
                  const _0x223e59 = _0x3c868a?.["type"];
                  const _0x553a48 = _0x3c868a?.["discount"];
                  let _0xd9266f = "";
                  switch (_0x223e59) {
                    case 1:
                      _0xd9266f = "优惠券🗑️";
                      break;
                    case 4:
                      _0xd9266f = _0x553a48 + "京豆🐶";
                      break;
                    case 6:
                      _0xd9266f = _0x553a48 + "店铺积分🎟️";
                      break;
                    case 9:
                      _0xd9266f = (_0x3c868a?.["interactPrizeSkuList"][0]?.["skuName"] || "未知") + "🎁";
                      break;
                    case 10:
                      _0xd9266f = _0x553a48 + "元E卡🎁";
                      break;
                    case 14:
                      _0xd9266f = _0x553a48 / 100 + "元红包🧧";
                      break;
                    default:
                      _0xd9266f = "未知奖品（" + _0x223e59 + "）";
                  }
                  _0x136835.push(_0xd9266f);
                }
              }
            }
            _0x36a833 = "✅ 签到成功";
            _0x136835.length > 0 && (_0x197b84 = _0x136835);
            _0x515409 = false;
          } else {
            if (_0x8d4b3c.code !== 200) {
              const _0x88da47 = signStatusMessages[_0x8d4b3c.code] || _0x8d4b3c.code + "|活动太火爆";
              [407100001, 407100002, 402].includes(_0x8d4b3c.code) && ($.runEnd = true);
              _0x197b84 = [_0x88da47];
              _0x36a833 = "❌ 签到失败";
              (_0x8d4b3c.code === "-1" || _0x8d4b3c.code === -1) && (_0x515409 = true);
            } else {
              if (_0x8d4b3c.msg) {
                _0x36a833 = "❌ 签到失败";
                _0x197b84 = [_0x8d4b3c.msg];
                if (!signStatusMessages[_0x8d4b3c.code]) {
                  _0x515409 = true;
                }
              } else {
                _0x36a833 = "❌ 签到失败 - " + JSON.stringify(_0x8d4b3c);
              }
            }
          }
          break;
        case "getSignRecord":
          if (_0x8d4b3c.code === 200 && _0x8d4b3c.success === true && _0x8d4b3c.data) {
            const _0x1ba3fc = _0x8d4b3c.data.days;
            _0x1ba3fc > 0 && $.maxLevel && (_0x197b84.push("连签" + _0x1ba3fc + "天"), $.maxLevel && _0x1ba3fc >= $.maxLevel && _0x197b84.push("已达活动上限"));
          } else {
            if (!_0x8d4b3c.msg) {
              console.log("❓" + _0x320916 + " " + JSON.stringify(_0x8d4b3c));
            }
          }
          break;
      }
    } catch (_0x34cb0a) {
      console.log("❌ 未能正确处理 " + _0x320916 + " 请求响应 " + (_0x34cb0a.message || _0x34cb0a));
    }
  }
  async function _0x135fe5(_0x4192ca) {
    let _0x568cf8 = "";
    let _0x631256 = null;
    let _0x299bfa = null;
    let _0x85b97d = "GET";
    let _0x4d7af7 = {};
    let _0xf97c78 = {};
    switch (_0x4192ca) {
      case "signCollectGift":
        _0xf97c78 = {
          appId: "4da33",
          functionId: "interact_center_shopSign_signCollectGift",
          appid: "interCenter_shopSign",
          body: {
            token: $.token,
            venderId: parseInt($.venderId) || "",
            activityId: parseInt($.activityId) || "",
            type: 56,
            actionType: 7
          },
          version: "4.7",
          ua: _0x52be19
        };
        _0x4d7af7 = await H5st.getH5st(_0xf97c78);
        _0x568cf8 = "https://api.m.jd.com/api";
        _0x299bfa = Object.assign({}, _0x4d7af7.paramsData, {
          jsonp: "jsonp1003"
        });
        break;
      case "getSignRecord":
        _0x568cf8 = "https://api.m.jd.com/api";
        _0x299bfa = {
          appid: "interCenter_shopSign",
          functionId: "interact_center_shopSign_getSignRecord",
          body: JSON.stringify({
            token: $.token,
            venderId: parseInt($.venderId) || "",
            activityId: parseInt($.activityId) || "",
            type: 56
          }),
          jsonp: "jsonp1001"
        };
        break;
    }
    const _0x4ce49d = {
      t: Math.floor(Date.now() / 1000) + "000",
      loginType: "2",
      "x-api-eid-token": _0x3af01c
    };
    _0x631256 && Object.assign(_0x631256, _0x4ce49d);
    _0x299bfa && Object.assign(_0x299bfa, _0x4ce49d);
    const _0x43c387 = {
      url: _0x568cf8,
      method: _0x85b97d,
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        Connection: "keep-alive",
        "Content-Type": "text/plain",
        Host: "api.m.jd.com",
        Referer: activityUrl,
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": _0x52be19,
        Cookie: _0x5b8553
      },
      params: _0x299bfa,
      data: _0x631256,
      timeout: 30000
    };
    _0x85b97d === "GET" && (delete _0x43c387.data, delete _0x43c387.headers["Content-Type"]);
    const _0x13a02b = 3;
    let _0x477da5 = 0;
    let _0x28138d = null;
    let _0x12806e = false;
    while (_0x477da5 < _0x13a02b) {
      const _0x2316cd = await common.request(_0x43c387);
      if (!_0x2316cd.success) {
        _0x28138d = _0x4192ca + " ➜ 请求失败（" + _0x2316cd.error + "）🚫";
        _0x477da5++;
        continue;
      }
      if (!_0x2316cd.data) {
        _0x28138d = _0x4192ca + " ➜ 请求失败（无响应数据）🚫";
        _0x477da5++;
        continue;
      }
      _0xfb39e3(_0x4192ca, _0x2316cd.data);
      _0x12806e = false;
      break;
    }
    _0x477da5 >= _0x13a02b && (console.log(_0x28138d), _0x12806e && ($.outFlag = true));
  }
}
async function handleResponse(_0x53c31a, _0xbd9faf) {
  try {
    switch (_0x53c31a) {
      case "getActivityInfo":
        if (_0xbd9faf.code === 200 && _0xbd9faf.success === true && _0xbd9faf.data) {
          $.getActivityInfo = _0xbd9faf.data;
        } else {
          _0xbd9faf.msg ? (console.log("🚫 查询活动信息失败 ➜ " + _0xbd9faf.msg), $.invalidAct = true) : (console.log("❓" + _0x53c31a + " " + JSON.stringify(_0xbd9faf)), $.invalidAct = true);
        }
        break;
    }
  } catch (_0x45cb6b) {
    console.log("❌ 未能正确处理 " + _0x53c31a + " 请求响应 " + (_0x45cb6b.message || _0x45cb6b));
  }
}
async function sendRequest(_0x3e00db) {
  if ($.runEnd) {
    return;
  }
  let _0xdf3148 = "";
  let _0x27af28 = null;
  let _0x1b8d65 = null;
  let _0x17fbc0 = "GET";
  let _0x791ca3 = {};
  let _0xe839e7 = {};
  switch (_0x3e00db) {
    case "getActivityInfo":
      _0xe839e7 = {
        appId: "4da33",
        functionId: "interact_center_shopSign_getActivityInfo",
        appid: "interCenter_shopSign",
        body: {
          token: $.token,
          venderId: ""
        },
        version: "4.7",
        ua: $.UA
      };
      _0x791ca3 = await H5st.getH5st(_0xe839e7);
      _0xdf3148 = "https://api.m.jd.com/api";
      _0x1b8d65 = Object.assign({}, _0x791ca3.paramsData, {
        jsonp: "jsonp1003"
      });
      break;
    default:
      console.log("❌ 未知请求 " + _0x3e00db);
      return;
  }
  const _0x148c69 = {
    t: Math.floor(Date.now() / 1000) + "000",
    loginType: "2",
    "x-api-eid-token": $.jsToken
  };
  _0x27af28 && Object.assign(_0x27af28, _0x148c69);
  _0x1b8d65 && Object.assign(_0x1b8d65, _0x148c69);
  const _0x59a8c3 = {
    url: _0xdf3148,
    method: _0x17fbc0,
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      Connection: "keep-alive",
      "Content-Type": "text/plain",
      Host: "api.m.jd.com",
      Referer: activityUrl,
      "Sec-Fetch-Dest": "script",
      "Sec-Fetch-Mode": "no-cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA
    },
    params: _0x1b8d65,
    data: _0x27af28,
    timeout: 30000,
    httpsTlsOptions: common.useAppTls()
  };
  _0x17fbc0 === "GET" && (delete _0x59a8c3.data, delete _0x59a8c3.headers["Content-Type"]);
  const _0x399b93 = 1;
  let _0x2a0709 = 0;
  let _0x32b38f = null;
  let _0x8be8d3 = null;
  while (_0x2a0709 < _0x399b93) {
    _0x2a0709 > 0 && (await $.wait(2000));
    const _0x979d12 = await common.request(_0x59a8c3);
    if (!_0x979d12.success) {
      _0x8be8d3 = _0x979d12.status;
      _0x32b38f = "🚫 " + _0x3e00db + " 请求失败 ➜ " + _0x979d12.error;
      _0x2a0709++;
      continue;
    }
    if (!_0x979d12.data) {
      _0x32b38f = "🚫 " + _0x3e00db + " 请求失败 ➜ 无响应数据";
      _0x2a0709++;
      continue;
    }
    await handleResponse(_0x3e00db, _0x979d12.data);
    ipBlack = false;
    break;
  }
  _0x2a0709 >= _0x399b93 && ($.errMsg = _0x32b38f, _0x8be8d3 !== 403 && console.log(_0x32b38f));
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@");
        const n = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const o = this.getval(i);
        const h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : undefined;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"];
            let s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl;
            let s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}