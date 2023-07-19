import { useState, useEffect } from "react";

export default function Example() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<nav class="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
			<div>
				<div class="container mx-auto flex items-center justify-between text-gray-900">
					<a
						href="#"
						class="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
					>
						<span>Material Tailwind</span>
					</a>
					<ul class="hidden items-center gap-6 lg:flex">
						<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a class="flex items-center" href="#">
								Pages
							</a>
						</li>
						<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a class="flex items-center" href="#">
								Account
							</a>
						</li>
						<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a class="flex items-center" href="#">
								Blocks
							</a>
						</li>
						<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
							<a class="flex items-center" href="#">
								Docs
							</a>
						</li>
					</ul>
					<button
						class="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
						type="button"
						data-ripple-light="true"
					>
						<span>Buy Now</span>
					</button>
					<button
						class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
						data-collapse-target="navbar"
					>
						<span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</span>
					</button>
				</div>
				<div
					class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
					data-collapse="navbar"
				>
					<div class="container mx-auto pb-2">
						<ul class="mt-2 mb-4 flex flex-col gap-2">
							<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
								<a class="flex items-center" href="#">
									Pages
								</a>
							</li>
							<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
								<a class="flex items-center" href="#">
									Account
								</a>
							</li>
							<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
								<a class="flex items-center" href="#">
									Blocks
								</a>
							</li>
							<li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
								<a class="flex items-center" href="#">
									Docs
								</a>
							</li>
						</ul>
						<button
							class="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
							data-ripple-light="true"
						>
							<span>Buy Now</span>
						</button>
					</div>
				</div>
			</div>
		</nav>

		// <nav class="bg-bgprimary border-bgprimary dark:bg-bgprimary">
		// 	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		// 		<a href="/" class="flex items-center">
		// 			<img
		// 				src="https://flowbite.com/docs/images/logo.svg"
		// 				class="h-8 mr-3"
		// 				alt="logo"
		// 			/>
		// 			<span class="self-left text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
		// 				Jesper Bennett
		// 			</span>
		// 		</a>
		// 		<button
		// 			data-collapse-toggle="navbar-default"
		// 			type="button"
		// 			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-bgprimary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
		// 			aria-controls="navbar-default"
		// 			aria-expanded="false"
		// 		>
		// 			<span class="sr-only">Open main menu</span>
		// 			<svg
		// 				class="w-5 h-5"
		// 				aria-hidden="true"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 				fill="none"
		// 				viewBox="0 0 17 14"
		// 			>
		// 				<path
		// 					stroke="currentColor"
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 					stroke-width="2"
		// 					d="M1 1h15M1 7h15M1 13h15"
		// 				/>
		// 			</svg>
		// 		</button>
		// 		<div
		// 			class="hidden w-full md:block md:w-auto"
		// 			id="navbar-default"
		// 		>
		// 			<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-bgprimary rounded-lg bg-bgprimary md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-bgprimary md:dark:bg-bgprimary dark:border-bgprimary">
		// 				<li>
		// 					<a
		// 						href="/"
		// 						class="block py-2 pl-3 pr-4 text-white rounded md:bg-bgprimary md:text-white md:p-0 dark:text-white md:dark:text-white"
		// 						aria-current="page"
		// 					>
		// 						Home
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="/about"
		// 						class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
		// 					>
		// 						About
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="/work"
		// 						class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
		// 					>
		// 						Projects
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a
		// 						href="/contact"
		// 						class="block py-2 pl-3 pr-4 text-white bg-bgprimary rounded hover:bg-bgprimary md:hover:bg-bgprimary md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-bgprimary"
		// 					>
		// 						Contact
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
	);
}
