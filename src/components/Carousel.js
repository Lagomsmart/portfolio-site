import React from "react";
import codingLaptop from "../images/codinglaptop.jpg";
import { Carousel } from "@material-tailwind/react";
import kiwichatpage from "../images/kiwichatpage.png";
import noajewelrypage from "../images/noajewelrypage.png";
import musiccarepage from "../images/musiccarepage.png";

export default function CarouselComponent() {
	return (
		<Carousel class="rounded-xl">
			<img
				src={kiwichatpage}
				alt="image 1"
				class="h-full w-full object-cover"
			/>
			<img
				src={noajewelrypage}
				alt="image 2"
				class="h-full w-full object-cover"
			/>
			<img
				src={musiccarepage}
				alt="image 3"
				class="h-full w-full object-cover"
			/>
		</Carousel>
	);
}
