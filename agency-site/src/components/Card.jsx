export default function Card({ children, className = "" }) {
	return <div className={`glass p-6 shadow-xl ${className}`}>{children}</div>;
}
