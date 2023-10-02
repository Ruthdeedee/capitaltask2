import { List } from "antd";
import Header from "./Header";
import Candidate from "./Candidate";
import avatar from "../../assets/Frame 501.svg";

import classes from "./style.module.scss";

const mockData = [
	{
		avatar,
		name: "Aaliyah Sanderson",
		country: "Riyadh, Saudi Arabia",
		education: "Bachelor - Cambridge University (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing", "London"],
	},
	{
		avatar,
		name: "John Doe",
		country: "Bostom, USA",
		education: "Bachelor - MIT (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing", "London"],
	},
	{
		avatar,
		name: "Thomas Matt",
		country: "Edinburgh, UK",
		education: "Bachelor - Harvard University (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing"],
	},
	{
		avatar,
		name: "Kamilia Smith",
		country: "London, UK",
		education: "Bachelor - Boston University (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing", "London"],
	},
	{
		avatar,
		name: "Roy Jade",
		country: "Cambridge, UK",
		education: "Bachelor - Yale (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing", "London"],
	},
	{
		avatar,
		name: "Ahmaed Salman",
		country: "New York, USA",
		education: "Bachelor - Cambridge University (2023 - 2023)",
		hashtags: ["#top_candidate", "#top_candidate"],
		labels: ["New York", "Marketing", "London"],
	},
];

export function CandidatesList() {
	return (
		<List className={classes.candidatesList} header={<Header />}>
			{mockData.map((candidate, index) => (
				<Candidate key={index} {...candidate} />
			))}
		</List>
	);
}
