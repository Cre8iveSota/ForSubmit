import { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  section: string; // 親側で <section id="about"> ... <TextAnimation section="about" /> のように使う想定
};

const TextAnimation = (props: Props): ReactElement => {
  const textRef = useCallback(
    (node: HTMLParagraphElement | null) => {
      if (!node) return;

      gsap.registerPlugin(TextPlugin, ScrollTrigger);

      const text = node.innerHTML;
      const height = node.clientHeight;
      node.innerHTML = "";
      node.style.height = height + "px";

      const selector = "#" + props.section;

      // タイムライン：タイプ → 消去 を1サイクルとして無限リピート
      const tl = gsap.timeline({
        repeat: -1, // 無限
        repeatDelay: 1.5, // 次サイクルまでの待ち時間
        paused: true,
        defaults: { ease: "none" },
      });

      tl.set(node, { text: "" })
        .to(node, {
          duration: text.length * 0.06,
          text: { value: text },
        })
        .to(node, {
          duration: text.length * 0.04,
          text: { value: "" },
          delay: 2.5, // タイプ後の待ち時間
        });

      // スクロールに合わせて再生/一時停止
      const st = ScrollTrigger.create({
        trigger: selector,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(0), // 画面外に出たら停止＆先頭へ
        onLeaveBack: () => tl.pause(0),
      });

      return () => {
        st.kill();
        tl.kill();
      };
    },
    [props.section]
  );

  return (
    <p
      ref={textRef}
      className="animation-text"
      style={{
        textShadow:
          "0.5px 0.5px 0 black, -0.5px -0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, 0px 0.5px 0 black, 0 -0.5px 0 black, -0.5px 0 0 black, 0.5px 0 0 black",
      }}
    >
      {props.children}
    </p>
  );
};

export default TextAnimation;
