import { Button } from "antd";
import house from "../../assets/House_01.svg";
import usersGroup from "../../assets/Users_Group.svg";
import calendar from "../../assets/Calendar_Check.svg";
import share from "../../assets/Share_Android.svg";
import file from "../../assets/File_Document.svg";
import notebook from "../../assets/Notebook.svg";
import heart from "../../assets/Heart_01.svg";
import chevronLeft from "../../assets/Chevron_Right_MD.svg";
import settings from "../../assets/settings.svg";
import userName from "../../assets/Frame 501.svg";

import classes from "./style.module.scss";

export function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<div>
				<div className="avatarCircle" />
				<div className="navGroup">
					<Button
						size="large"
						icon={<img src={house} alt="house" />}
						className="active"
					/>
					<Button
						size="large"
						icon={<img src={usersGroup} alt="usersGroup" />}
					/>
					<Button
						size="large"
						icon={<img src={calendar} alt="calendar" />}
					/>
					<Button size="large" icon={<img src={share} alt="share" />} />
					<Button size="large" icon={<img src={file} alt="file" />} />
					<Button
						size="large"
						icon={<img src={notebook} alt="notebook" />}
					/>
					<Button size="large" icon={<img src={heart} alt="heart" />} />
					<Button
						size="large"
						icon={<img src={chevronLeft} alt="chevronLeft" />}
					/>
				</div>
			</div>

			<div className="bottomActions">
				<Button size="large" icon={<img src={settings} alt="settings" />} />
				<Button size="large" icon={<img src={userName} alt="userName" />} />
			</div>
		</div>
	);
}
