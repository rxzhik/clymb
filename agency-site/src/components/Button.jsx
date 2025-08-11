import React, { forwardRef } from "react";
const Button = forwardRef(function Button(
	{ children, variant = "primary", className = "", as = "button", ...props },
	ref
) {
	const Comp = as;
	const base = "btn rounded-2xl transition-transform active:scale-[.98]";
	const styles =
		variant === "ghost"
			? "btn-ghost"
			: "btn-primary shadow-[0_0_30px_rgba(var(--glow-magenta)/0.25)]";
	return (
		<Comp ref={ref} className={`${base} ${styles} ${className}`} {...props}>
			{children}
		</Comp>
	);
});
export default Button;
