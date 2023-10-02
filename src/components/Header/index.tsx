import { Typography, Dropdown, Button, Divider, Badge } from "antd";
import arrowDown from "../../assets/Caret_Down_MD.svg";
import tag from "../../assets/Tag.svg";
import userCheck from "../../assets/User_Check.svg";
import userClose from "../../assets/User_Close.svg";
import userVoice from "../../assets/User_Voice.svg";
import mail from "../../assets/Mail.svg";
import expandMore from "../../assets/expand_more.svg";
import classes from "./style.module.scss";

const MenuItem = ({ text, count }: { text: string; count: number }) => {
	return (
		<div className="menuItem">
			<Typography.Text>{text}</Typography.Text>
			<Badge count={count} />
		</div>
	);
};

export function Header() {
	return (
		<div className={classes.header}>
			<div className="left">
				<Typography.Title level={4} className="name">
					London Internship Program
				</Typography.Title>
				<Typography.Text>London</Typography.Text>
			</div>

			<div className="meduim">
				<Dropdown
					menu={{
						className: classes.browsingDropdown,
						items: [
							{
								key: 1,
								label: <MenuItem text="Applied" count={177} />,
							},
							{
								key: 2,
								label: <MenuItem text="Shortlisted" count={177} />,
							},
							{
								key: 3,
								label: (
									<MenuItem text="Technical Interview" count={177} />
								),
							},
							{
								key: 4,
								label: (
									<MenuItem text="Oportunity Browsing" count={177} />
								),
							},
							{
								key: 5,
								label: (
									<MenuItem text="Video Interview |" count={177} />
								),
							},
							{
								key: 6,
								label: (
									<MenuItem text="Video Interview ||" count={177} />
								),
							},
							{
								key: 7,
								label: (
									<MenuItem text="Video Interview |||" count={177} />
								),
							},
							{
								key: 8,
								label: <MenuItem text="Offer" count={177} />,
							},
							{
								key: 9,
								label: <MenuItem text="Withdrawn" count={177} />,
							},
						],
					}}
				>
					<Button className="dropdownButton">
						Opportunity Browsing
						<img src={arrowDown} alt="arrow" />
					</Button>
				</Dropdown>
			</div>

			<div className="right">
				<Button
					size="large"
					icon={<img src={tag} alt="tag" />}
					className="iconButton"
				/>
				<Button
					size="large"
					icon={<img src={userClose} alt="userClose" />}
					className="iconButton"
				/>
				<Button
					size="large"
					icon={<img src={userCheck} alt="userCheck" />}
					className="iconButton"
				/>
				<Button
					size="large"
					icon={<img src={userVoice} alt="userVoice" />}
					className="iconButton"
				/>
				<Button
					size="large"
					icon={<img src={mail} alt="mail" />}
					className="iconButton"
				/>

				<Divider type="vertical" style={{ height: "2em" }} />
				<Button className="videoInterviewButton" style={{}}>
					<Typography.Text>Move To Video Interview I</Typography.Text>
					<img src={expandMore} alt="arrowDown" />
				</Button>
			</div>
		</div>
	);
}
