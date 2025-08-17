import { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  section: string;
};

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const TextAnimation = (props: Props): ReactElement => {
  const textRef = useCallback(
    (node: HTMLParagraphElement | null) => {
      if (!node) return;

      const text = node.innerHTML;
      const h = node.clientHeight;
      node.innerHTML = "";
      node.style.height = h + "px";

      const sectionEl = document.getElementById(props.section);
      const triggerEl = sectionEl ?? node;

      const typeDur = text.length * 0.06;
      const eraseDur = text.length * 0.04;

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        paused: true,
        defaults: { ease: "none" },
      });

      tl.set(node, { text: "" })
        .to(node, { duration: typeDur, text: { value: text } })
        .to(node, { duration: eraseDur, text: { value: "" } }, "+=3");

      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top 90%",
          end: "bottom 10%",
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play(),
          onLeave: () => tl.pause(0),
          onLeaveBack: () => tl.pause(0),
          onRefresh: (self) => {
            if (self.isActive) tl.play();
          },
          // markers: true,
        });
      });

      mm.add("(min-width: 769px)", () => {
        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play(),
          onLeave: () => tl.pause(0),
          onLeaveBack: () => tl.pause(0),
          onRefresh: (self) => {
            if (self.isActive) tl.play();
          },
          // markers: true,
        });
      });

      // レイアウト変化対策
      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        mm.revert(); // matchMedia のクリーンアップ
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
