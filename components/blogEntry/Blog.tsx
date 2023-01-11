import Image from 'next/image';
import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import styles from './blog.module.scss';

export const Blog = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h3>Lorem ipsum dolor sit amet vorit consectetur...</h3>

				<ul className={styles.socialContainer}>
					<p>Share</p>
					<li>
						<BsTwitter />
					</li>
					<li>
						<BsFacebook />
					</li>
					<li>
						<BsLinkedin />
					</li>
					<li>
						<BsInstagram />
					</li>
				</ul>

				<article className={styles.blog}>
					<div className={styles.thumbNailContainer}>
						<Image
							className={styles.blogThumbnail}
							src="/images/meeting.jpg"
							alt="A friendly group meeting around a table"
						/>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
						officiis. At quo dignissimos asperiores non dolore. At quo
						dignissimos asperiores non dolore. At quo dignissimos asperiores non
						dolore. Attending a trade show can be a very effective method of
						promoting your company and its products. And one of the most
						effective ways to optimize your trade show display and a trade show
						can be a very effective method of promoting your company and its
						products. And one of the most effective ways to optimize your trade
						show display and increase traffic to your booth is through the use
						of banner stands.
					</p>
				</article>
			</header>

			<div className={styles.blogMain}>
				<Image
					className={styles.blogImage}
					src="/images/collab.jpg"
					alt="A meeting of people on their laptops"
				/>
				<h3 className={styles.blogTitle}>Placeholder Title</h3>
				<p>
					Last month, my wife, Anne Doe, took me to Las Vegas because she had to
					go for a business convention. Needless to say, she writes for an guide
					to casinos and I hate gambling. But then, she likes it and this
					supports us too, so I went along without any hassle. At first I was
					depressed, but then as I asked around and looked around, I ended up
					having more fun in Las Vegas than I would have thought. And no. I did
					not enter a single casino while I was there.
				</p>

				<h4 className={styles.blogSubTitle}>Entertainment</h4>
				<p>
					One of the greatest things about Las Vegas, Reno and Atlantic City
					(but especially Las Vegas) is the number of shows that are available.
					You can get to watch top class comedians like Jay Leno, Jerry
					Seinfeld, Ray Romano, Tim Allen and even the likes of Bill Cosby and
					Chris Rock. If you are into music you can watch female singers like
					Celine Dion, Mariah Carey, Britney Spears, Christina Aguilera and
					Beyonc?, male performers like Phil Collins, Eric Clapton, Snoopy Dog
					and bands like Oasis and Bon Jovi. I could go on and on but the list
					is endless. If you are into magic you can watch magicians like David
					Copperfield do their thing meters from you. Whatever you like, you can
					find it here from Western music to oldies to Jazz, Rock, Heavy Mettle
					to Trance. All you have to do is look at the itenary offered during
					your visit.
				</p>

				<h4 className={styles.blogSubTitle}>Food</h4>
				<p>
					Chinese to Japanese to Korean to Jewish and even Vegetarian and proper
					meat eating establishments await your every delight in Vegas. Do not
					opt for the cheap and oily fried dishes served for free while you
					play. Stop a while and take in the delightful scenery and smells of
					East Asian or European dishes. What is wondrous is that you get to see
					man&apos;s ability to mix. A real melting pot if I may say so myself.
				</p>
				<br />

				<p>
					But is that all what casino cities like Las Vegas are about? Do you
					have to remain in the city to really and truly enjoy your stay? No.
					your visit.
				</p>

				<section className={styles.blogInfo}>
					<div className={styles.blogAuthor}>
						<p className={styles.blogAuthorName}>Viola Manisa</p>
						<p className={styles.blogAuthorTitle}>☑ Verified writer</p>
					</div>
					<p>PUBLISHED ON MAY, 2 2019</p>
				</section>
			</div>
		</div>
	);
};

export default Blog;
