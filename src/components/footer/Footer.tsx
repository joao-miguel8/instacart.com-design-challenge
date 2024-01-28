import { ReactNode } from "react";
import "./style/footer.css";
function Footer({ children }: { children: ReactNode }) {
	return <footer>{children}</footer>;
}

export default Footer;
