import { useEffect, useRef } from "react";

export default function MarxismIntro({ onFinish }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (event.data?.type === "INTRO_FINISH") {
        onFinish?.(); // gọi callback để chuyển step
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onFinish]);

  return (
    <iframe
      ref={iframeRef}
      src="/intro.html"
      className="w-full h-screen border-0"
    />
  );
}
