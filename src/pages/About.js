import React from "react";
import Button from "../components/Button";

export default function About() {
	return (
		<div class="flex w-full max-w-[1920px] items-center flex-col md:p-10 md:mt-8 text-white">
			<div class="text-3xl">About</div>
			<div class="flex flex-col text-center md:text-left md:w-1/2 w-full text-xl leading-8 mt-6 text-ysab ">
				<div class="py-8 w-full">
					Hello, I'm Jesper, and I'm passionate about bringing the
					digital world to life through front-end web development.
					With a keen eye for design and a knack for crafting seamless
					user experiences, I've dedicated myself to the art of
					turning code into captivating websites.
				</div>
				<div class="py-6 w-full">
					My journey began with a love for all things creative and a
					deep appreciation for the power of technology. Today, I
					channel that passion into every line of HTML, CSS, and
					JavaScript I write. I believe that the front-end is where
					the magic happens, where aesthetics and functionality merge
					to create a memorable online presence.
				</div>
				<div class="py-6 w-full">
					My skill set includes turning design concepts into
					responsive websites, optimizing user interfaces for the best
					experience, and staying up-to-date with the latest web
					technologies. I'm committed to staying on the cutting edge
					of the ever-evolving web landscape.
				</div>
				<div class="py-6 w-full">
					My mission is simple: to make the web a more visually
					engaging and user-friendly place, one project at a time. If
					you share my enthusiasm for front-end development, let's
					connect and explore how we can collaborate on creating
					exceptional web experiences.
				</div>
				<div class="py-6 w-full">
					Thank you for visiting my portfolio. I look forward to
					sharing my passion for front-end web development with you
					and bringing your digital visions to life.
				</div>
				<div class="flex flex-col md:flex-row self-center mt-8">
					<div>
						<Button
							page="https://drive.google.com/file/d/1CEGeH5oQ7XgiXPHMMjGd27oHZSpRMYUM/view?usp=sharing"
							title={"Testimonial"}
						/>
					</div>
					<div class="mx-8 my-6 md:my-0">
						<Button page="/contact" title={"Contact"} />
					</div>
					<div>
						<Button
							page="https://drive.google.com/file/d/1SlBkRV4YnpJwKAjhncn3EECQE9wYhb8-/view"
							title={"Testimonial"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
