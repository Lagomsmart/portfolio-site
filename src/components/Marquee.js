import React from "react";

export default function Marquee() {
	const marqList = [
		<div class="relative mr-5 inline-flex items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
			<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
			<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				React
			</span>
			<span class="absolute inset-0 border-2 border-white rounded-full"></span>
		</div>,
		<div class="relative mr-5 inline-flex items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
			<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
			<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				Tailwind
			</span>
			<span class="absolute inset-0 border-2 border-white rounded-full"></span>
		</div>,
		<div class="relative mr-5 inline-flex items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
			<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
			<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				SCSS
			</span>
			<span class="absolute inset-0 border-2 border-white rounded-full"></span>
		</div>,
		<div class="relative mr-5 inline-flex items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
			<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
			<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				Responsive Design
			</span>
			<span class="absolute inset-0 border-2 border-white rounded-full"></span>
		</div>,
		<div class="relative mr-5 inline-flex items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
			<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
			<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
			<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
				JavaScript
			</span>
			<span class="absolute inset-0 border-2 border-white rounded-full"></span>
		</div>,
	];

	return (
		<div class="relative flex overflow-x-hidden">
			<div class="py-8 animate-marquee whitespace-nowrap">{marqList}</div>

			<div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
				{marqList}
			</div>
		</div>
	);
}
