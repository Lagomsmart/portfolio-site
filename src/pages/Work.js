import React from "react";
import kiwichatpage from "../images/kiwichatpage.png";
import noajewelrypage from "../images/noajewelrypage.png";
import musiccarepage from "../images/musiccarepage.png";

export default function Work() {
	return (
		<section class="flex w-full max-w-[1920px] items-center flex-col md:p-10 md:mt-8 text-white text-xl leading-8 mt-6 text-ysab">
			<div class="flex p-4 md:w-3/4 md:flex-row flex-col justify-evenly ">
				<img src={musiccarepage} class="w-full md:w-2/5 bg-white" />
				<div class="w-full flex flex-col items-center justify-evenly text-center md:w-2/5">
					<a href="https://www.music.care/en/index.html">
						Music.Care
					</a>
					<div>
						is the first application to treat pain through music
						that has received numerous awards and is certified by
						medical institutions.
					</div>
					<div>PUG, JavaScript, jQuery, HTML&CSS</div>
				</div>
			</div>

			<div class="flex p-4 md:w-3/4 md:flex-row flex-col justify-evenly ">
				<img src={noajewelrypage} class="w-full md:w-2/5 bg-white" />
				<div class="w-full flex flex-col items-center justify-evenly text-center md:w-2/5">
					<a href="https://www.noajewelry.shop/">NOA Jewelry</a>
					<div>Affordable luxary jewelry online store</div>
					<div>React.JS, HTML&CSS</div>
				</div>
			</div>

			<div class="flex p-4 md:w-3/4 md:flex-row flex-col justify-evenly ">
				<img src={kiwichatpage} class="w-full md:w-2/5 bg-white" />
				<div class="w-full flex flex-col items-center justify-evenly text-center md:w-2/5">
					<a href="https://kiwichat.com/">KiwiChat</a>
					<div>
						App built to help incarcerated persons maintain and grow
						their support network.
					</div>
					<div>ReactNative, HTML&CSS</div>
				</div>
			</div>
		</section>
	);
}
