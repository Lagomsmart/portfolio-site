import React from "react";
import Lottie from "lottie-react";
import lottieImage from "../lotties/contactLottie.json";

export default function Contact() {
	return (
		<section className="heroSection">
			<div className="heroTitle">Contact</div>
			<div className="aboutWrap">
				<div className="aboutContent">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Proin ut vehicula ante. Quisque fermentum orci augue, non
					lobortis dui dignissim ut. Pellentesque bibendum arcu eget
					nulla porttitor, at congue massa convallis.
				</div>
				<div className="aboutContent">
					Nam porta augue convallis ante cursus posuere. Fusce elit
					dui, facilisis at magna id, consequat bibendum mi. Nullam
					congue metus et porta gravida.
				</div>
				<div className="aboutContent">JesperBennett@Protonmail.com</div>
			</div>
			<div className="contactLottieWrap">
				<Lottie animationData={lottieImage} height={200} width={200} />
			</div>
		</section>
	);
}
