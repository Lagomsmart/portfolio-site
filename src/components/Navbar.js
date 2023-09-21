import { useState, useEffect } from "react";

export default function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<nav className="bg-bgprimary border-bgprimary dark:bg-bgprimary">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" class="flex items-center">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						class="h-8 mr-3"
						alt="logo"
					/>
					<span class="self-left text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
						Jesper Bennett
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-bgprimary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLineCap="round"
							strokeLineJoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div
					class="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
					<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bgprimary rounded-lg bg-bgprimary md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-bgprimary md:dark:bg-bgprimary dark:border-bgprimary">
						<li>
							<a
								href="/"
								class="block py-2 pl-3 pr-4 text-white rounded md:bg-bgprimary md:text-white md:p-0 dark:text-white md:dark:text-white"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/about"
								class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="/work"
								class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="/contact"
								class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
