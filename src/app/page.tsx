
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-dm-sans)]">
      <main className="flex flex-col justify-items-center items-center gap-2">
        <Logo/>
        <div className="text-sm text-center font-[family-name:var(--font-dm-sans)]">
            <p>Portfolio for Douglas Welcome coming soon.</p>
        </div>
        <div className="text-sm text-center font-[family-name:var(--font-dm-sans)]">
            <p>Please email me at <a href="mailto:hello@douglaswelcome.com">hello@douglaswelcome.com</a> to get in touch and view work samples.</p>
        </div>
      </main>
    </div>
  );
}
