import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/dwlogo.svg"
          alt="Douglas Welcome Logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
            Portfolio for Douglas Welcome coming soon...
        </div>
        <div className="text-sm text-center font-[family-name:var(--font-geist-mono)]">
            Please email <a href="mailto:hello@douglaswelcome.com">hello@douglaswelcome.com</a> to get in touch and view work samples.
        </div>
      </main>
    </div>
  );
}
