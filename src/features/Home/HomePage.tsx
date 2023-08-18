interface CardProps {
	title?: string;
	description?: string;
	bgImage?: string;
	link?: string;
}

function Card({ title, description, bgImage, link }: CardProps) {
	return (
		<div className="card min-w-[230px] bg-neutral text-neutral-content">
			<div className="card-body items-center text-center">
				<h2 className="card-title">Cookies!</h2>
				<p>We are using cookies for no reason.</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Accept</button>
					<button className="btn btn-ghost">Deny</button>
				</div>
			</div>
		</div>
	);
}

function HomePage() {
	return (
		<div className="flex justify-center items-center p-8">
			<div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default HomePage;
