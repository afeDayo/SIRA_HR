export const wrap = "mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)]";
export const wrapWide = "mx-auto w-full max-w-[1360px] px-[clamp(20px,5vw,64px)]";
export const section = "py-[clamp(72px,10vw,132px)]";

const headingBase = "font-display font-normal tracking-[-0.015em] text-balance text-ink";
export const dxl = `${headingBase} text-[clamp(44px,8.2vw,104px)] leading-[0.98]`;
export const dlg = `${headingBase} text-[clamp(38px,6vw,74px)] leading-[1.04]`;
export const dmd = `${headingBase} text-[clamp(30px,4.4vw,52px)] leading-[1.04]`;
export const dsm = `${headingBase} text-[clamp(24px,3.2vw,36px)] leading-[1.1]`;

export const lead = "text-[clamp(18px,2.1vw,21px)] leading-[1.6] text-ink-soft max-w-[56ch]";

export const grad = {
  1: "bg-[linear-gradient(150deg,#124F45,#2C7C6D)]",
  2: "bg-[linear-gradient(150deg,#2C7C6D,#7FB3A4)]",
  3: "bg-[linear-gradient(150deg,#0C332C,#2C7C6D)]",
} as const;
export const mediaGrad = "bg-[linear-gradient(160deg,#124F45,#2C7C6D_70%,#7FB3A4)]";
export const blobGrad = "bg-[linear-gradient(150deg,#124F45_0%,#2C7C6D_55%,#7FB3A4_120%)]";

export const pill = "inline-flex items-center rounded-full bg-sage-soft px-3 py-[5px] text-xs font-semibold text-pine";
export const pillGray = "inline-flex items-center rounded-full bg-line-soft px-3 py-[5px] text-xs font-semibold text-ink-soft";

export const inputCls =
  "w-full rounded-[12px] border border-line bg-ground px-4 py-[14px] font-sans text-[15.5px] text-ink transition duration-300 ease-brand focus:border-teal focus:bg-surface focus:outline-none focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-teal)_16%,transparent)]";
export const labelCls = "mb-2 block text-[13px] font-semibold text-ink-soft";
export const fieldRow = "grid grid-cols-2 gap-4 max-[720px]:grid-cols-1";
export const formNote = "mt-2 text-[13px] text-ink-faint";
export const formError = "mt-2 text-[13px] font-semibold text-danger";
