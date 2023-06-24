import { SetStateAction, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
	const [log, setLog] = useState<Array<string>>([]);
	useEffect(() => {
		// To resolve this issue, you can use the import.meta.env object instead of process.env. The import.meta.env object is provided by Vite.js and allows you to access environment variables in your code.
		document.title = import.meta.env.VITE_APP_NAME;
	}, [log]);
	const addToArrayHandler = (
		newValue: any,
		prevValue: string[],
		setter: React.Dispatch<SetStateAction<any[]>>,
	) => {
		const newLog = [...prevValue, newValue];
		setter(newLog);
	};
	return (
		<div className="container max-auto place-content-center">
			<div className="prose">
				<h1 className="prose-h1">Vite</h1>
			</div>
			<div className="btn-group">
				<button
					className="btn btn-primary"
					onClick={() =>
						addToArrayHandler(import.meta.env.VITE_APP_NAME, log, setLog)
					}
				>
					ADD
				</button>
				<button className="btn btn-neutral" onClick={() => setLog([])}>
					CLEAR
				</button>
			</div>
			<div className="overflow-x-auto">
				<table className="table table-zebra">
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{log.map((item, index) => (
							<tr>
								<td>
									<code key={index}>{item.toString()}</code>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Outlet />
		</div>
	);
}

export default HomePage;
