import "../style/footer.css";

function AccessibilityFooterToggleSection() {
	return (
		<div className="footer-accessibility-section">
			<h4>Accessibility</h4>
			<div className="footer-toggle-and-text-container">
				<span>Enable high contrast colors</span>
				<div className="footer-accessibility-toggle">
					<input type="checkbox" id="switch" />
					<label htmlFor="switch">Toggle</label>
				</div>
			</div>
		</div>
	);
}

export default AccessibilityFooterToggleSection;
