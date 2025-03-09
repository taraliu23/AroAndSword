
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'


const images = [
	'/images/manifesto/1.png',
	'/images/manifesto/2.png',
	'/images/manifesto/3.png',
	'/images/manifesto/4.png',
	'/images/manifesto/5.png',
	'/images/manifesto/6.png',
	'/images/manifesto/7.png'
]
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

const sizes = ['small', 'medium', 'large'] // Random sizes for variety

export default function ManifestoSection() {
	const [layout, setLayout] = useState([])
	const [lightboxImage, setLightboxImage] = useState(null)
	const galleryRef = useRef(null)

	useEffect(() => {
		if (!galleryRef.current) return

		const containerWidth = galleryRef.current.offsetWidth
		const containerHeight = galleryRef.current.offsetHeight

		const rows = 3
		const cols = Math.ceil(images.length / rows)
		const spacingX = containerWidth / cols
		const spacingY = containerHeight / rows

		const generated = images.map((_, i) => ({
			top: `${(i % rows) * spacingY * 0.8}px`,
			left: `${Math.floor(i / rows) * spacingX * 0.8}px`,
			rotate: `${Math.random() * 8 - 4}deg`,
			zIndex: Math.floor(Math.random() * 10) + 1,
			size: sizes[i % sizes.length] // Cycle through sizes
		}))

		setLayout(generated)
	}, [])

	return (
		<div className="manifesto-section">
			{/* <h1 className="manifesto-headline">Manifesto</h1>
			<p className="manifesto-subtext">A visual articulation of our values, stories, and purpose.</p> */}

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
					Scroll through and drag to feel the pulse.
				</p>
			</motion.div>


			<div className="manifesto-gallery-collage" ref={galleryRef}>
				{images.map((src, index) => (
					<motion.div
						key={index}
						className={`collage-image-wrapper ${layout[index]?.size}`}
						drag
						dragConstraints={galleryRef}
						dragElastic={0.2}
						whileTap={{ scale: 0.96 }}
						animate={{ x: 0, y: 0 }} // Snap-back effect
						onClick={() => setLightboxImage(src)}
						style={{
							'--top': layout[index]?.top,
							'--left': layout[index]?.left,
							'--rotate': layout[index]?.rotate,
							'--z-index': layout[index]?.zIndex
						}}
					>
						<Image src={src} alt={`Manifesto ${index + 1}`} fill className="collage-image" />
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{lightboxImage && (
					<motion.div
						className="lightbox-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setLightboxImage(null)}
					>
						<motion.div
							className="lightbox-content"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.4 }}
						>
							<Image src={lightboxImage} alt="Zoomed" fill className="lightbox-image" />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}