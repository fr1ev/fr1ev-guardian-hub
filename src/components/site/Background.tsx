export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#06142f_0%,#030712_60%)]" />
      <div className="grid-bg absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(90%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="animate-drift absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[oklch(0.62_0.21_262/22%)] blur-[130px]" />
      <div className="animate-float absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.72_0.17_235/14%)] blur-[140px]" />
      <div className="animate-drift absolute bottom-0 -left-24 h-[26rem] w-[26rem] rounded-full bg-[oklch(0.5_0.2_270/16%)] blur-[150px]" />
    </div>
  );
}
