export default function FormError({ children }: { children: string }) {
  return (
    <p role="alert" className="mt-3 rounded-xl bg-danger/10 px-4 py-3 text-[14px] font-semibold text-danger">
      {children}
    </p>
  );
}
