import { Header, Sidebar, Filters, CandidatesList } from "./components";
import classes from "./app.module.scss";
import "./global.scss";

export default function App() {
	return (
		<div className={classes.layout}>
			<Sidebar />
			<div className="main">
				<Header />

				<div className="container">
					<div className="item">
						<Filters />
					</div>
					<div className="item candidatesContainer">
						<CandidatesList />
					</div>
				</div>
			</div>
		</div>
	);
}
