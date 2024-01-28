import { ReactNode } from "react";
import "./style/footer.css";
function Footer({ children }: { children: ReactNode }) {
	return <footer className="footer-wrapper">{children}</footer>;
}

export default Footer;
