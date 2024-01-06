import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-24 mb-4 text-2xl">Page not found</h1>
			<p>Sorry, what ever you're looking for is not available here..</p>
			<Link
				to="/"
				className="px-4 py-2 mt-8 text-white duration-200 bg-blue-400 border border-blue-400 hover:bg-white hover:text-blue-400 hover:rounded-none rounded-xl"
			>
				home
			</Link>
		</div>
	);
}
