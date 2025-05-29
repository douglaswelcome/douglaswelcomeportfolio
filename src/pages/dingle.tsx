import type { Metadata } from "next";
import SvgIcon from "@/components/svg_icon/svg_icon";

export const metadata: Metadata = {
  title: "Douglas Welcome Portfolio",
  description: "Douglas Welcome is a Product Designer with a passtion for brand and all things front-end web. ",
};

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-dm-sans)]">
      <main className="flex flex-col justify-items-center items-center gap-2">
        <div className="">
          <SvgIcon path="dwlogo.svg" height={24} width={32} fill="var(--foreground" />
        </div>
        <div className="text-sm text-center font-[family-name:var(--font-dm-sans)]">
            <p>Full portfolio for Douglas Welcome coming soon.</p>
        </div>
        <div className="text-sm text-center font-[family-name:var(--font-dm-sans)]">
            <p>To get in touch, please email me at <a href="mailto:hello@douglaswelcome.com">hello@douglaswelcome.com</a> or take a look at some of <a href="/sample-of-work">my work</a>.</p>
        </div>
        {/* <div className="pt-[1rem]">
        <Cta copy="View Sample of Work" href="/sample-of-work" />
        </div> */}

      </main>
    </div>
  );
}