
import { ReactComponent as RadialChart } from "../assests/xiang.svg";
import { ReactComponent as Bubble } from "../assests/BubbleNew.svg";
import { useEffect, useState } from "react";
import left1 from "../assests/left1.png";
import left2 from "../assests/left2.png";
import { Modal, Button } from "antd";
import '../styles/button.css';
import'../App.css';

const infoList = [
  {
    id: "tx",
    name: "檀香",
    content: "君香，见于《诗经》、《日华子本草》、《本草蒙筌》、《本草纲目》。",
  },
  {
    id: "zao",
    name: "枣",
    content: "使香，见于《诗经》、《神农本草经》、《本草纲目》共三本典籍。",
  },
  {
    id: "dx",
    name: "丁香",
    content: "君香，见于《山海经》、《齐民要术》、《药性论》、《本草纲目》。",
  },
  {
    id: "smt",
    name: "杉木炭",
    content: "使香，见于《周礼·月令》、《本草蒙筌》共两本典籍。",
  },
  {
    id: "jm",
    name: "净蜜",
    content: "使香，《礼记·内则》、《神农本草经》、《名医别录》、《药性论》、《本草拾遗》、《本草纲目》共六本典籍。",
  },
  {
    id: "cx",
    name: "沉香",
    content:
      "君香，见于《异物志》、《名医别录》、《日华子本草》、《海药本草》、《陈氏香谱》、《本草纲目》。",
  },
  {
    id: "hx",
    name: "藿香",
    content: "臣香，见于《异物志》、《名医别录》、《本草纲目》共三本典籍。",
  },
  {
    id: "sx",
    name: "麝香",
    content:
      "佐香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》共四本典籍。",
  },
  {
    id: "mx",
    name: "木香",
    content:
      "臣香，见于《神农本草经》、《名医别录》、《药性论》、《日华子本草》、《本草纲目》共五本典籍。",
  },
  {
    id: "yx",
    name: "焰硝",
    content: "使香，见于《神农本草经》、《本草纲目》、《香乘》共三本典籍。",
  },
  {
    id: "bj",
    name: "白芨",
    content: "臣香，见于《神农本草经》共一本典籍。",
  },
  {
    id: "bz",
    name: "白芷",
    content: "臣香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "xs",
    name: "玄参",
    content: "佐香，见于《神农本草经》、《名医别录》、《开宝本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "gc",
    name: "甘草",
    content: "佐香，见于《神农本草经》、《名医别录》、《异物志》共三本典籍。",
  },
  {
    id: "zj",
    name: "皂荚",
    content: "使香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "dg",
    name: "当归",
    content:
      "佐香，见于《神农本草经》、《名医别录》、《药性论》、《日华子本草》、《本草纲目》共五本典籍。",
  },
  {
    id: "hl",
    name: "黄连",
    content: "君香，见于《神农本草经》、《名医别录》、《日华子本草》、《本草纲目》共四本典籍。",
  },
  {
    id: "dh",
    name: "大黄",
    content:
      "使香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "wmr",
    name: "乌梅肉",
    content: "使香，见于《神农本草经》、《名医别录》、《药性论》、《日华子本草》、《陈氏香谱》、《本草纲目》共六本典籍。",
  },
  {
    id: "hd",
    name: "黄丹",
    content:
      "使香，见于《神农本草经》共一本典籍。",
  },
  {
    id: "fp",
    name: "浮萍",
    content: "使香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "cq",
    name: "川穹",
    content:
      "佐香，见于《神农本草经》、《名医别录》、《药性论》、《日华子本草》、《本草纲目》共五本典籍。",
  },
  {
    id: "qwh",
    name: "蔷薇花",
    content: "君香，见于《神农本草经》、《本草拾遗》、《本草蒙筌》共三本典籍。",
  },
  {
    id: "sz",
    name: "石脂",
    content:
      "臣香，见于《神农本草经》、《名医别录》、《药性论》、《本草纲目》共四本典籍。",
  },
  {
    id: "tmy",
    name: "天麻幼",
    content: "臣香，见于《神农本草经》、《药性论》、《日华子本草》、《开宝本草》、《本草纲目》共五本典籍。",
  },
  {
    id: "xzz",
    name: "香栀子",
    content:
      "臣香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "szr",
    name: "酸枣仁",
    content: "君香，见于《神农本草经》、《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共五本典籍。",
  },
  {
    id: "gb",
    name: "藁本",
    content:
      "使香，见于《神农本草经》、《药性论》、《日华子本草》、《本草纲目》共四本典籍。",
  },
  {
    id: "mh",
    name: "麻黄",
    content:
      "使香，见于《神农本草经》、《药性论》、《日华子本草》、《陈氏香谱》、《本草蒙筌》、《本草纲目》共六本典籍。",
  },
  {
    id: "ln",
    name: "龙脑",
    content:
      "君香，见于《名医别录》、《海药本草》、《本草图经》、《本草纲目》共四本典籍。",
  },
  {
    id: "jx",
    name: "甲香",
    content:
      "臣香，见于《名医别录》、《唐本草》、《海药本草》、《香乘》共四本典籍。",
  },
  {
    id: "rx",
    name: "乳香",
    content:
      "臣香，见于《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共四本典籍。",
  },
  {
    id: "xf",
    name: "香附",
    content: "臣香，见于《名医别录》、《陈氏香谱》、《本草纲目》共三本典籍。",
  },
  {
    id: "bl",
    name: "槟榔",
    content:
      "使香，见于《名医别录》、《日华子本草》、《陈氏香谱》、《本草纲目》共四本典籍。",
  },
  {
    id: "ztx",
    name: "詹糖香",
    content:
      "使香，见于《和香方》、《本草蒙筌》、《本草纲目》、《香乘》共四本典籍。",
  },
  {
    id: "shx",
    name: "苏合香",
    content: "臣香，见于《后汉书》、《本草蒙筌》、《陈氏香谱》、《本草纲目》共四本典籍。",
  },
  {
    id: "bmr",
    name: "白梅肉",
    content:
      "使香，见于《齐民要术》、《本草拾遗》、《日华子本草》、《开宝本草》、《陈氏香谱》、《香乘》共六本典籍。",
  },
  {
    id: "yj",
    name: "郁金",
    content:
      "佐香，见于《药性论》、《开宝本草》、《本草纲目》、《香乘》共四本典籍。",
  },
  {
    id: "ssr",
    name: "缩砂仁",
    content: "使香，见于《药性论》、《海药本草》、《开宝本草》共三本典籍。",
  },
  {
    id: "st",
    name: "松碳",
    content:
      "使香，见于《药性论》、《陈氏香谱》、《本草纲目》共三本典籍。",
  },
  {
    id: "axx",
    name: "安息香",
    content:
      "使香，见于《晋书》、《唐本草》、《本草纲目》共三本典籍。",
  },
  {
    id: "hx",
    name: "茴香",
    content: "臣香，见于《唐本草》、《诸蕃志·卷下·志物·蔷薇水》、《本草纲目》共三本典籍。",
  },
  {
    id: "bjx",
    name: "白胶香",
    content:
      "使香，见于《唐本草》、《本草拾遗》共两本典籍。",
  },
  {
    id: "gs",
    name: "甘松",
    content: "君香，见于《本草拾遗》、《开宝本草》、《本草纲目》共三本典籍。",
  },
  {
    id: "rdk",
    name: "肉豆蔻",
    content: "佐香，见于《唐本草》、《日华子本草》、《本草蒙荃》、《本草纲目》共四本典籍。",
  },
  {
    id: "bmx",
    name: "白茅香",
    content:
      "使香，见于《唐本草》、《本草纲目》共两本典籍。",
  },
  {
    id: "bdk",
    name: "白豆蔻",
    content: "使香，见于《本草拾遗》、《开宝本草》、《本草纲目》共三本典籍。",
  },
  {
    id: "dxp",
    name: "丁香皮",
    content: "臣香，见于《海药本草》、《本草纲目》共两本典籍。",
  },
  {
    id: "wb",
    name: "榅桲",
    content:
      "使香，见于《唐本草》、《日华子本草》、《海药本草》、《开宝本草》、《本草纲目》共五本典籍。",
  },
  {
    id: "lcm",
    name: "腊茶末",
    content: "臣香，见于《茶经》、《香乘》共两本典籍。",
  },
  {
    id: "ps",
    name: "硼砂",
    content: "臣香，见于《日华子本草》、《本草纲目》共两本典籍。",
  },
  {
    id: "songzr",
    name: "松子仁",
    content:
      "使香，见于《海药本草》、《本草纲目》共两本典籍。",
  },
  {
    id: "maox",
    name: "茅香",
    content: "佐香，见于《开宝本草》、《海药本草》、《本草纲目》、《香乘》共四本典籍。",
  },
  {
    id: "gg",
    name: "官桂",
    content: "使香，见于《本草图经》共一本典籍。",
  },
  {
    id: "jzx",
    name: "降真香",
    content:
      "臣香，见于《证类本草》、《本草纲目》、《香乘》共三本典籍。",
  },
  {
    id: "qt",
    name: "青苔",
    content: "使香，见于《陈氏香谱》共一本典籍。",
  },
  {
    id: "tt",
    name: "桐碳",
    content: "使香，见于《陈氏香谱》、《本草纲目》共两本典籍。",
  },
  {
    id: "drx",
    name: "笃耨香",
    content:
      "使香，见于《周礼·月令》、《百宝总珍集·笃伤》共两本典籍。",
  },
  {
    id: "dss",
    name: "大食水",
    content: "使香，见于《诸蕃志·卷下·志物·蔷薇水》、《百宝总珍集·笃伤》共两本典籍。",
  },
  {
    id: "qws",
    name: "蔷薇水",
    content: "君香，见于《诸蕃志·卷下·志物·蔷薇水》、《本草图经》共两本典籍。",
  },
  {
    id: "fss",
    name: "佛手香",
    content: "使香，见于《饮食须知》、《本草纲目》共两本典籍。",
  },
  {
    id: "lzp",
    name: "荔枝皮",
    content: "使香，见于《本草蒙荃》、《陈氏香谱》、《香乘》共三本典籍。",
  },
  {
    id: "zn",
    name: "樟脑",
    content: "臣香，见于《本草品汇精要》、《本草纲目》共两本典籍。",
  },
  {
    id: "mxh",
    name: "木犀花",
    content: "使香，见于《本草纲目》、《香乘》共两本典籍。",
  },
  {
    id: "sxh",
    name: "素馨花",
    content: "使香，见于《本草纲目》共一本典籍。",
  },
  {
    id: "zzx",
    name: "蜘蛛香",
    content: "使香，见于《本草品汇精要》、《本草纲目》共两本典籍。",
  },
  {
    id: "lbg",
    name: "老柏根",
    content: "君香，见于《本草纲目》共一本典籍。",
  },
  {
    id: "llx",
    name: "零陵香",
    content: "君香，见于《嘉佑本草》、《本草纲目》共两本典籍。",
  },
  { id: "jyx", name: "金颜香", content: "君香，见于《香乘》共一本典籍。" },
];

function XiangPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [showAnother, setShowAnother] = useState(true);

  useEffect(() => {
    if (showAnother) {
      const allCls32 = document.querySelectorAll(".cls-32");
      const allCls46 = document.querySelectorAll(".cls-46");
      const allCls57 = document.querySelectorAll(".cls-57");
      const allCls66 = document.querySelectorAll(".cls-66");
      for (let i = 0; i < allCls32.length; i++) {
        allCls32[i].addEventListener("click", () => {
          const id = allCls32[i].attributes["data-name"]?.nodeValue;
          const info = infoList.find((info) => info.id === id);
          if (info) {
            setIsModalOpen(true);
            setInfo(info);
          }
        });
      }

      for (let i = 0; i < allCls46.length; i++) {
        allCls46[i].addEventListener("click", () => {
          console.log(allCls46[i], i, 'cls46')
          const id = allCls46[i].attributes["data-name"]?.nodeValue;
          const info = infoList.find((info) => info.id === id);
          if (info) {
            setIsModalOpen(true);
            setInfo(info);
          }
        });
      }

      for (let i = 0; i < allCls57.length; i++) {
        allCls57[i].addEventListener("click", () => {
          const id = allCls57[i].attributes["data-name"]?.nodeValue;
          const info = infoList.find((info) => info.id === id) || {};
          if (info) {
            setIsModalOpen(true);
            setInfo(info);
          }
        });
      }

      for (let i = 0; i < allCls66.length; i++) {
        allCls66[i].addEventListener("click", () => {
          const id = allCls66[i].attributes["data-name"]?.nodeValue;
          const info = infoList.find((info) => info.id === id);
          if (info) {
            setIsModalOpen(true);
            setInfo(info);
          }
        });
      }
    } else {
      const hsx = document.querySelector(".hsx");
      const allHsx = document.querySelectorAll(".cls-11");
      const lsx = document.querySelector(".lsx");
      const allLsx = document.querySelectorAll(".cls-8");
      const psx = document.querySelector(".psx");
      const allPsx = document.querySelectorAll(".cls-7");
      const wsx = document.querySelector(".wsx");
      const allWsx = document.querySelectorAll(".cls-9");
      const rsx = document.querySelector(".rsx");
      const allRsx = document.querySelectorAll(".cls-6");
      console.log(hsx, allHsx, "hsx");
      hsx?.addEventListener("click", () => {
        allHsx.forEach((node) => {
          node.style.opacity = 1;
          // node.style.transition = 'transform 2s';
          node.style["box-shawdow"] = "scale(1.5)";

          setTimeout(() => {
            node.style.opacity = 0.6;
          }, 2000);
        });
      });
      lsx?.addEventListener("click", () => {
        allLsx.forEach((node) => {
          node.style.opacity = 1;
          // node.style.transition = 'transform 2s';
          node.style["box-shawdow"] = "scale(1.5)";

          setTimeout(() => {
            node.style.opacity = 0.6;
          }, 2000);
        });
      });
      psx?.addEventListener("click", () => {
        allPsx.forEach((node) => {
          node.style.opacity = 1;
          // node.style.transition = 'transform 2s';
          node.style["box-shawdow"] = "scale(1.5)";

          setTimeout(() => {
            node.style.opacity = 0.6;
          }, 2000);
        });
      });
      wsx?.addEventListener("click", () => {
        allWsx.forEach((node) => {
          node.style.opacity = 1;
          // node.style.transition = 'transform 2s';
          node.style["box-shawdow"] = "scale(1.5)";

          setTimeout(() => {
            node.style.opacity = 0.6;
          }, 2000);
        });
      });
      rsx?.addEventListener("click", () => {
        allRsx.forEach((node) => {
          node.style.opacity = 1;
          // node.style.transition = 'transform 2s';
          node.style["box-shawdow"] = "scale(1.5)";

          setTimeout(() => {
            node.style.opacity = 0.6;
          }, 2000);
        });
      });
    }
  }, [showAnother]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="xiang-page" >
      <Button
        // type="primary"
        className="custom-button"
        onClick={() => setShowAnother((s) => !s)}
      >
        {showAnother ? "查看中华香方的温凉寒热" : "查看中华香方始载"}
      </Button>

      {showAnother ? (
        <>
        <img src={left1}  height= "100vh"alt="alt" ></img>
            {/* <img src={right1} width="40%" alt="alt" ></img> */}
          <RadialChart />
        </>
      ) : (
        <>
            <img className="bubble-img" src={left2} height= "100vh" alt="alt"></img>
            {/* <img src={right2} width="20%" alt="alt" ></img> */}
            <Bubble /> 
        </>
      )}

      <Modal
        cancelText="取消"
        okText="确认"
        title={info.name}
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <p>{info.content}</p>
      </Modal>
    </div>
  );
}

export default XiangPage;
