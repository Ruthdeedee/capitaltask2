import { Typography, Checkbox, Badge, Divider } from "antd";

export default function Header() {
	return (
		<>
			<Checkbox>
				<Typography.Text strong className="checkboxText">
					247 Candidates
				</Typography.Text>
			</Checkbox>
			<div className="countsList">
				<Typography.Text className="colored">Qulified</Typography.Text>
				<Divider type="vertical" />
				<div className="count">
					<Typography.Text>Task</Typography.Text>
					<Badge count={25} />
				</div>
				<Divider type="vertical" />
				<div className="count">
					<Typography.Text>Disqualified</Typography.Text>
					<Badge count={75} />
				</div>
			</div>
		</>
	);
}
