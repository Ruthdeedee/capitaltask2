import { List, Typography, Input } from "antd";
import arrownDown from "../../assets/Caret_Down_MD.svg";
import file from "../../assets/File_Document.svg";
import search from "../../assets/Search_Magnifying_Glass.svg";
import warning from "../../assets/Circle_Warning.svg";
import classes from "./style.module.scss";

export function Filters() {
	return (
		<div className={classes.filters}>
			<Input
				type="text"
				placeholder="Serach by name, edu, exp or #tag"
				size="large"
				prefix={<img src={search} alt="searchIcon" />}
				suffix={<img src={warning} alt="warningIcon" />}
			/>
			<List
				size="large"
				header={
					<>
						<Typography.Text strong>Filters</Typography.Text>
						<Typography.Text type="secondary">0 Selected</Typography.Text>
					</>
				}
				bordered
				dataSource={[
					"Personal Information",
					"Education",
					"Work Experience",
					"Activity Filter",
					"Advanced Filter",
				]}
				renderItem={(item: string) => (
					<List.Item>
						<>
							<div className="itemName">
								<img src={file} alt="file" />
								<Typography.Text>{item}</Typography.Text>
							</div>
							<img src={arrownDown} alt="arrowDown" />
						</>
					</List.Item>
				)}
			></List>
		</div>
	);
}
