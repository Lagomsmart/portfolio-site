import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../lotties/contactLottie.json";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export default function Contact() {
	return (
		<div class="flex w-full max-w-[1920px] text-center items-center flex-col md:p-10 md:mt-8 text-white">
			<section class="flex flex-col items-center md:max-w-[1240px]">
				<div class="text-4xl self-center">Contact</div>
				<div class="flex flex-col items-center">
					<div class="text-l text-center md:w-2/3 mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ut vehicula ante. Quisque fermentum orci augue,
						non lobortis dui dignissim ut. Pellentesque bibendum
						arcu eget nulla porttitor, at congue massa convallis.
					</div>
					<div class="text-l text-center mt-5">
						Nam porta augue convallis ante cursus posuere. Fusce
						elit dui, facilisis at magna id, consequat bibendum mi.
						Nullam congue metus et porta gravida.
					</div>
					<div class="text-center md:text-left mt-10">
						JesperBennett@Protonmail.com
					</div>
				</div>
				<div class="w-2/3 md:max-w-[400px] h-2/3 md:max-h-[400px]">
					<Lottie
						animationData={lottieImage}
						height={200}
						width={200}
					/>
				</div>
			</section>
		</div>
	);
}
