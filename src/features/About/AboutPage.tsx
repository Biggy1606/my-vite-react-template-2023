import { about } from "../../configure";

/** Here is located about page where you can find information about this application:
 * - short description of this application
 * - how to use it
 * - information about persons responsible for maintaining this application
 */
function AboutPage() {
	return (
		<div className="hero ">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">About</h1>
					<p className="py-6">{about.program_description}</p>
					<h2 className="text-2xl font-bold pt-10">Authors</h2>
					<p className="py-6">
						{about.program_authors.map((author) => (
							<div key={author.name}>
								{author.name} - <a href={"mailto:" + author.email} className="link">{author.email}</a>
							</div>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
