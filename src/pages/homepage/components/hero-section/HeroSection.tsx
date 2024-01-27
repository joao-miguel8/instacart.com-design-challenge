import QRCodePhoneIMG from "../../../../assets/qrcode-phone-img.webp";
import QRCodeIMG from "../../../../assets/qrcode-img.png";
import "./heroSection.css";

function HeroSection() {
	return (
		<section className="hero-section-container">
			<div className={`bg-hero-img`}>
				<div>
					<h1>Order groceries for delivery or pickup today</h1>
					<p>Whatever you want from local stores, brought right to your door.</p>
				</div>
			</div>
			{/* ----- QRCode CTA SECTION ------ */}
			<div className="qr-code-cta-container">
				<img src={QRCodePhoneIMG} alt="Himg" />
				<div>
					<h2>Get the full Instacart experience</h2>
					<p>Scan the QR code with your camera. First delivery is free.</p>
				</div>
				<img src={QRCodeIMG} alt="QR code img" className="qr-code-cta-img" />
			</div>
		</section>
	);
}

export default HeroSection;
