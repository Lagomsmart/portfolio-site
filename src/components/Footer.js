import React from "react";

export default function Footer() {
	return (
		<footer className="px-4 pt-16 w-full divide-y bg-bgprimary text-gray-100">
			<div className="container flex flex-col justify-between py-8 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3 flex items-start">
					<a
						rel="noopener noreferrer"
						href="/"
						className="flex justify-center space-x-3 lg:justify-start"
					>
						<span className=" text-2xl font-semibold ">
							Jesper Bennett
						</span>
					</a>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-2 gap-y-8 lg:w-2/3 sm:grid-cols-5">
					<div className="space-y-2">
						<a
							href="/"
							className="tracki uppercase dark:dark:text-gray-50"
						>
							Home
						</a>
					</div>
					<div className="space-y-2">
						<a
							href="/About"
							className="tracki uppercase dark:dark:text-gray-50"
						>
							About
						</a>
					</div>
					<div className="space-y-2">
						<a
							href="/Work"
							className="uppercase dark:dark:text-gray-50"
						>
							Projects
						</a>
					</div>
					<div className="space-y-2">
						<a
							href="/Contact"
							className="uppercase dark:dark:text-gray-50"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
