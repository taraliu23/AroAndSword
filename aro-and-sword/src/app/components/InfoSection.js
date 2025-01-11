import React from "react";
import { motion } from "motion/react";

export default function InfoSection({ title, description, image, link }) {
	return (
		<motion.section
			className="row mb-5 align-items-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className="col-lg-6">
				<h2 className="mb-4">{title}</h2>
				<p className="lead">{description}</p>
				<a href={link} className="button is-success">
					Learn More
				</a>
			</div>
			<div className="col-lg-6">
				<img src={image} alt={title} className="img-fluid rounded" loading="lazy" />
			</div>
		</motion.section>
	);
}
