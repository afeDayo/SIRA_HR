import SiraMark from "../components/SiraMark";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import { wrap, dmd, lead as leadCls } from "../lib/ui";

export default function NotFound() {
  return (
    <div className={`${wrap} grid min-h-[70vh] place-items-center pb-20 pt-[140px] text-center`}>
      <div className="max-w-[520px]">
        <SiraMark className="mx-auto block w-16" />
        <div className="mt-6 flex justify-center"><Eyebrow center>404 — Page not found</Eyebrow></div>
        <h1 className={`${dmd} my-3.5`}>This page took a different journey.</h1>
        <p className={`${leadCls} mx-auto mb-7`}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.</p>
        <Button to="/" withArrow className="justify-center">Back to home</Button>
      </div>
    </div>
  );
}
