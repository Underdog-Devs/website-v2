import React from 'react';
import styles from './Testimonial.module.scss';
// import quotationMark from '../../public/images/quotation-mark.svg';

function Testimonial() {
	return (
		<div className={styles.container}>
			<div className="header">
				<div className="quotation">
					<p>This is where the quotation svg will go</p>
				</div>
				<h1>
					Testimonial
				</h1>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, neque aspernatur. Quis voluptas numquam sequi iste qui hic rerum, quod optio eum at repellendus esse, similique, illum fuga tempore repudiandae.
			</p>
			<div className="author">
				{/* <img></img> */}
				<div className="authorInfo">
					<p>name</p>
					<p>title</p>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
