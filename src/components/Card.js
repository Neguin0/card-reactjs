import styles from "./Card.module.css";

function Card({ img, title, details }) {
	return (
		<section className={styles.Card}>
			<img className={styles.Card__Img} src={img} alt={title} />
			<h2 className={styles.Card__Title}>{title}</h2>
			<p className={styles.Card__Details}>{details}</p>
		</section>
	);
}

export default Card;
