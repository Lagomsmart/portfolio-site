import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../lotties/contactLottie.json";
import { BsLaptop } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

export default function Contact() {
	return (
		<div className="flex flex-col justify-center">
			<section className="flex flex-col text-white md:max-w-[1440px]">
				<div className="text-4xl self-center">Contact</div>
				<div className="flex flex-col">
					<div className="text-l text-center md:text-left mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ut vehicula ante. Quisque fermentum orci augue,
						non lobortis dui dignissim ut. Pellentesque bibendum
						arcu eget nulla porttitor, at congue massa convallis.
					</div>
					<div className="text-l text-center md:text-left mt-5">
						Nam porta augue convallis ante cursus posuere. Fusce
						elit dui, facilisis at magna id, consequat bibendum mi.
						Nullam congue metus et porta gravida.
					</div>
					<div className="text-center md:text-left mt-10">
						JesperBennett@Protonmail.com
					</div>
				</div>
				<div className="contactLottieWrap">
					<Lottie
						animationData={lottieImage}
						height={200}
						width={200}
					/>
				</div>
			</section>

			<section class="relative flex text-white justify-center text-center pt-40 md:mt-30 w-full md:border-x-2 md:border-x-green-color">
				<div class="hidden md:flex items-center justify-end absolute bg-red-500 z-10 -left-1/2 h-[80%] w-2/3 rounded-2xl">
					<div class="flex uppercase text-5xl  text-light -rotate-90 tracking-wide">
						Projects
					</div>
				</div>
				<div class="flex-col ">
					<div class="flex flex-row align-center md:px-5 py-6">
						<div class="mr-3 my-auto w-[50px] h-[50px]">
							<BsLaptop size={50} />
						</div>
						<div class="my-auto">
							I'm a web developer based in Miami, mainly focused
							on front-end
						</div>
					</div>

					<div class="rounded-sm border-green-600 border-2 hover:border-green-primary py-2">
						<div className="homeBtn">Set up a meeting</div>
					</div>
					<div class="flex flex-row align-center md:px-5 py-6">
						<div class="mr-3 my-auto w-[50px] h-[50px]">
							<AiOutlineFundProjectionScreen size={50} />
						</div>
						<div class="my-auto">
							If you are interested in my latest work and
							accomplishments, check out the Projects page
						</div>
					</div>
					<a to="/About" className="navbarButton">
						<div className="homeBtnWrap">
							<div className="homeBtn">Link to work page</div>
						</div>
					</a>
					<div class="flex flex-row align-center md:px-5 py-6">
						<div class="mr-3 my-auto w-[50px] h-[50px]">
							<FaReact size={50} />
						</div>
						<div class="my-auto">
							My choice of programming language is JavaScript, and
							its library React
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
