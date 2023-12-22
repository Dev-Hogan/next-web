export default function DashBoard() {
	const num = new Array(30).fill("link")
	return (
		<div className="text-[64px]">
			数据面板
			{num.map((l, idx) => {
				return (
					<li id="`${idx}`" className="text-[16px]">
						测试{l}-{idx}
					</li>
				)
			})}
		</div>
	)
}
