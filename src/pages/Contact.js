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
				<div class="flex flex-col items-center md:max-w-5xl">
					<div class="text-xl  text-ysab md:w-5/6 text-center md:w-2/3 mt-5">
						Do you have an exciting web development project in mind,
						or are you looking for a reliable web developer to bring
						your ideas to life? I'd love to hear from you!
					</div>
					<div class="text-xl  text-ysab md:w-5/6 text-center md:w-2/3 mt-5">
						Please feel free to reach out to us via email at
						JesperBennett@Protonmail.com. Whether it's a simple
						inquiry, a detailed project proposal, or just a friendly
						hello, I'm always eager to connect with fellow
						enthusiasts, potential clients, and anyone interested in
						web development.
					</div>
					<div class="text-xl  text-ysab md:w-5/6 text-center md:w-2/3 mt-5">
						Thank you for considering reaching out, and I look
						forward to hearing from you.
					</div>
					<div class="text-xl text-ysab md:w-5/6 md:w-2/3 mt-5 text-center mt-10">
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
