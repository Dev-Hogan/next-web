export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section>
			<nav>页面布局</nav>
			{children}
		</section>
	)
}
