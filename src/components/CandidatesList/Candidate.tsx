import { Typography, Checkbox, Badge } from "antd";

type CandidateProps = {
	avatar: string;
	name: string;
	country: string;
	education: string;
	hashtags: string[];
	labels: string[];
};

export default function Candidate(props: CandidateProps) {
	return (
		<div className="candidate">
			<Checkbox />
			<img src={props.avatar} alt="avatar" className="avatar" />
			<div>
				<Typography.Title level={3}>{props.name}</Typography.Title>
				<Typography.Paragraph strong>{props.country}</Typography.Paragraph>
				<Typography.Paragraph>{props.education}</Typography.Paragraph>
				<div className="hashtags">
					{props.hashtags.map((hashtage) => (
						<Typography.Link key={hashtage}>{hashtage}</Typography.Link>
					))}
				</div>
				<div className="labels">
					{props.labels.map((label) => (
						<Badge key={label}>{label}</Badge>
					))}
				</div>
			</div>
		</div>
	);
}
