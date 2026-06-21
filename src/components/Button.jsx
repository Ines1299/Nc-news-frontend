export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-indigo-700 text-white hover:bg-indigo-800",
    secondary:
      "bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200",
    ghost: "text-stone-700 hover:bg-stone-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
