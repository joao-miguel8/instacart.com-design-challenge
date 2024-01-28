import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import "../style/footer.css";

function LegalFooterSection() {
	return (
		<div className="footer-legal-section">
			<div className="footer-legal-heading-terms-and-policy-container">
				<h4>Legal</h4>
				<div className="footer-legal-socials-and-terms-and-policy-container">
					<div className="footer-legal-terms-and-policy-links">
						<a href="https://www.instacart.com/terms">Terms of Use</a>
						<a href="https://www.instacart.com/privacy">Privacy Policy</a>
					</div>
					<div className="footer-social-media-container">
						<a href="https://www.facebook.com/Instacart">
							<FaFacebookSquare size={"2rem"} color={"rgb(52, 53, 56)"} />
						</a>
						<a href="https://twitter.com/instacart">
							<FaTwitter size={"1.8rem"} color={"rgb(52, 53, 56)"} />
						</a>
						<a href="https://www.instagram.com/instacart/">
							<AiFillInstagram size={"1.8rem"} color={"rgb(52, 53, 56)"} />
						</a>
						<a href="https://www.pinterest.com/instacart/">
							<FaPinterest size={"1.8rem"} color={"rgb(52, 53, 56)"} />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-legal-terms-conditions">
				<p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
				<p>
					Terms for Free Delivery (First Order): Offer valid on first order made through Instacart with a minimum basket size as set forth in the offer promotion. Offer expires on the date indicated in the user’s account settings or displayed in the offer promotion.
					<a href="https://www.instacart.com/help/section/360007996832/360040705992">View more details here</a>.
				</p>
			</div>
		</div>
	);
}

export default LegalFooterSection;
