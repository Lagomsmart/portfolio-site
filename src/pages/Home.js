import React from "react";
import "./pages.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "../components/Button";
import Marquee from "../components/Marquee";
import { Carousel } from "@material-tailwind/react";

import Lottie from "lottie-react";
import lottieImage from "../lotties/languageSpin.json";
import { IconContext, BsLaptop } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { MdWorkOutline, MdCardTravel } from "react-icons/md";
import codinglaptop from "../images/codinglaptop.jpg";

export default function Home() {
	return (
		<div class="flex w-full max-w-[1920px] items-center flex-col md:p-10 md:mt-8">
			<section class="flex flex-col-reverse md:flex-row justify-center md:justify-evenly w-full">
				<div class="flex flex-col md:w-1/2 justify-center text-center md:text-left">
					<div class="text-3xl text-green-color">
						Hi I'm Jesper 👋🏼
					</div>
					<div class="text-2xl text-green-color mb-6 mt-2">
						Front End Web Developer
					</div>
					<div class="text-xl leading-8 text-white text-ysab md:w-5/6">
						I'm thrilled that you've taken the time to explore my
						work and passion for creating engaging, user-centric web
						experiences. Whether you're here to view my projects,
						seek inspiration for your own, or discuss potential
						collaborations, I'm here to assist.
					</div>
					<div>
						<Marquee />
					</div>
					<div class="flex justify-center md:justify-start mt-2">
						<div class="mr-5">
							<Button page="/contact" title={"Contact me"} />
						</div>
						<div>
							<Button page="#Tech" title={"Read more ↓"} />
						</div>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<Lottie animationData={lottieImage} />
				</div>
			</section>

			<section
				id="Tech"
				class="flex flex-col md:flex-row-reverse text-white justify-center text-center md:pt-4 mt-24 md:justify-evenly md:border-x-2 md:border-x-green-color"
			>
				<div class="flex row md:flex-col items-center md:items-end justify-center text-3xl md:text-6xl text-bold md:w-1/3 uppercase">
					<div>
						Services <br />& Tech
					</div>
				</div>
				<div class="flex flex-col md:w-1/2 md:pr-20 justify-center text-center md:text-left">
					<div class="relative w-auto inline-block h-auto md:m-0 m-4 p-4 flex justify-center">
						<div class="block absolute right-0 top-0 border h-1/3 border-green-color" />
						<div class="block absolute right-0 top-0 border w-1/3 border-green-color" />
						<div class="block absolute left-0 bottom-0 border h-1/3 border-green-color" />
						<div class="block absolute left-0 bottom-0 border w-1/3 border-green-color" />
						<img
							class="w-3/4 h-auto"
							src={codinglaptop}
							alt="laptop"
						/>
					</div>
					<div class="text-3xl mt-6 mt-6">Web Developer</div>
					<div class="text-xl leading-8 mt-6 text-ysab">
						Fast load time and lag free interactions. Responsive
						layouts that work on any device, big or small. Dynamic
						styles that make pages come to life.
					</div>
					<div class="flex justify-center md:justify-start mt-6">
						<div class="mr-5">
							<Button page="/contact" title={"My Resume"} />
						</div>
						<div>
							<Button page="/work" title={"Projects"} />
						</div>
					</div>
				</div>
			</section>

			<section class="relative flex text-white justify-center text-center pt-40 md:mt-30 w-full md:border-x-2 md:border-x-green-color">
				<div class="hidden md:flex items-center justify-end absolute bg-red-500 z-10 -left-1/2 h-[80%] w-2/3 rounded-2xl">
					<div class="flex uppercase text-5xl  text-light -rotate-90 tracking-wide">
						Projects
					</div>
				</div>
				<div class="flex flex-col md:flex-row justify-center w-full">
					<div class="hidden md:block md:w-1/6"></div>
					<div class="flex flex-col w-full md:w-2/6 md:px-12 text-center md:text-left justify-center ">
						<div class=" md:hidden self-center text-4xl mb-6">
							Projects
						</div>
						<div class="pb-4 text-xl leading-8 mt-6 text-ysab">
							Here you'll find a diverse range of websites I've
							had the privilege of working on. From responsive
							designs to user-friendly interfaces, these examples
							showcase my commitment to turning ideas into
							functional, aesthetically pleasing realities.
						</div>
					</div>
					<div class="flex w-full md:w-3/6 md:pr-12 pt-8 md:pt-0 justify-center">
						<div class="md:w-5/6 w-full">
							<Carousel class="rounded-xl">
								<img
									src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
									alt="image 1"
									class="h-full w-full object-cover"
								/>
								<img
									src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
									alt="image 2"
									class="h-full w-full object-cover"
								/>
								<img
									src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
									alt="image 3"
									class="h-full w-full object-cover"
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</section>

			<section class="relative flex text-white justify-center text-center pt-40 md:mt-30 w-full md:border-x-2 md:border-x-green-color">
				<div class="hidden md:flex items-center justify-start absolute bg-red-500 z-10 -right-1/2 h-[80%] w-2/3 rounded-2xl">
					<div class="flex uppercase text-5xl  text-light -rotate-90 tracking-wide">
						empty
					</div>
				</div>
				<div class="flex-col text-xl leading-8 mt-6 text-ysab md:max-w-5xl">
					<div class="flex flex-row align-center md:px-5 py-6">
						<div class="my-auto">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pellentesque sed placerat diam, vel tincidunt
							dui. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos.
						</div>
					</div>

					<div class="flex flex-row align-center md:px-5 py-6">
						<div class="my-auto">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Pellentesque sed placerat diam, vel tincidunt
							dui. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
