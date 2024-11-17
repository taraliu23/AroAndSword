import PageLayout from '../components/PageLayout';
// export default function DosAndDonts() {
// 	return (
// 		<div className="content">
// 			<h1>Dos and Don'ts</h1>
// 			<h2>Dos</h2>
// 			<ul>
// 				<li>Respect aromantic identities and boundaries.</li>
// 				<li>Educate yourself about aromantic experiences.</li>
// 				<li>Be open to non-romantic relationship structures.</li>
// 			</ul>
// 			<h2>Don'ts</h2>
// 			<ul>
// 				<li>Don’t assume aromanticism is a phase.</li>
// 				<li>Avoid statements like “You just need to find the right person.”</li>
// 				<li>Don’t dismiss aromantic feelings as “loneliness.”</li>
// 			</ul>
// 		</div>
// 	);
// }


export default function DosAndDonts() {
	return (
		<PageLayout title="Dos and Don'ts">
			<p>
				Learn how to respectfully interact with members of the aromantic community. This page offers guidelines and helpful advice for understanding.
			</p>
			<ul className="list-unstyled">
				<li>Respect personal boundaries and identity.</li>
				<li>Avoid making assumptions about romantic or platonic relationships.</li>
				<li>Don’t say, “You just need to meet the right person.”</li>
			</ul>
		</PageLayout>
	);
}
