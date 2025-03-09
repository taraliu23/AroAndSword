
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const variants = {
	hidden: { opacity: 0, y: 40 },
	visible: index => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: 'easeOut',
			delay: index * 0.2
		}
	})
}

export default function ManifestoSection() {
	const images = [
		'/images/manifesto/1.png',
		'/images/manifesto/2.png',
		'/images/manifesto/3.png',
		'/images/manifesto/4.png',
		'/images/manifesto/5.png',
		'/images/manifesto/6.png',
		'/images/manifesto/7.png'
	]

	return (
		<div className="manifesto-section">
			<motion.h1
				className="manifesto-headline"
				initial="hidden"
				whileInView="visible"
				custom={0}
				variants={variants}
				viewport={{ once: true }}
			>
				Manifesto
			</motion.h1>

			<motion.p
				className="manifesto-subtext"
				initial="hidden"
				whileInView="visible"
				custom={1}
				variants={variants}
				viewport={{ once: true }}
			>
				A visual articulation of our values, stories, and purpose.
			</motion.p>

			<motion.div
				className="manifesto-paragraph"
				initial="hidden"
				whileInView="visible"
				custom={2}
				variants={variants}
				viewport={{ once: true }}
			>
				<p>
					Our manifesto is a collection of visual moments.
					Each image captures a part of our journey — raw, honest, playful.
					Scroll through and feel the pulse.
				</p>
			</motion.div>

			<div className="manifesto-gallery">
				{images.map((src, index) => (
					<motion.div
						key={index}
						className="manifesto-image-wrapper"
						initial="hidden"
						whileInView="visible"
						custom={index + 3}
						variants={variants}
						viewport={{ once: true }}
						drag
						dragElastic={0.3}
						whileTap={{ scale: 0.96 }}
					>
						<div className="manifesto-image-ratio-box">
							<Image
								src={src}
								alt={`Manifesto ${index + 1}`}
								fill
								className="manifesto-image"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}
