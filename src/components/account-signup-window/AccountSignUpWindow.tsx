import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../home-main-menu/style/accountSignUpWindow.css";
import "../../App.css";
import type { SignUpOptionsMapAsType } from "../home-main-menu/types/SignUpOptionsType";
import type { LoginSignUpStatusType } from "./types/LoginSignUpStatusType";
import { useState } from "react";

export function AccountSignUpWindow({ loginSignUpStatus, setLoginSignUpStatus }: { loginSignUpStatus: LoginSignUpStatusType; setLoginSignUpStatus: (status: LoginSignUpStatusType) => void }) {
	const signUpLogoIcons = {
		size: "1.6rem",
	};

	const [toggleLoginOption, setToggleLoginOption] = useState(false);

	const [signUpInputs, setSignUpInputs] = useState({
		emailInput: "",
		phoneInput: "",
	});

	const signUpOptions: SignUpOptionsMapAsType = {
		google: { icon: <FcGoogle size={signUpLogoIcons.size} />, title: "Continue with Google" },
		facebook: { icon: <FaFacebook size={signUpLogoIcons.size} color={"#4267B2"} />, title: "Continue with Facebook" },
		phone: {
			icon: <BsFillTelephoneOutboundFill size={signUpLogoIcons.size} />,
			title: "Continue with Phone",
			onClick: () => {
				setShowEmail(true);
				setSignUpInputs({ ...signUpInputs, phoneInput: "" });
			},
		},

		email: {
			icon: <MdEmail size={signUpLogoIcons.size} />,
			onClick: () => {
				setShowEmail(false);
				setSignUpInputs({ ...signUpInputs, emailInput: "" });
			},
			title: "Continue with Email",
		},
	};

	const [showEmail, setShowEmail] = useState(false);

	return (
		<>
			<div className={`sign-in-container ${loginSignUpStatus.isSignUpEnabled ? "sign-in-container-shown" : "sign-in-container-hidden"}`}>
				<div className="sign-in-container-header">
					<button onClick={() => setLoginSignUpStatus({ ...loginSignUpStatus, isSignUpEnabled: false })}>
						<IoClose size="1.4rem" color={"#343538"} />
					</button>
					{toggleLoginOption ? <h2>Sign up</h2> : <h2>Log in</h2>}
				</div>
				<div className="sign-in-options-and-input-wrapper">
					<div className="sign-in-options-container">
						{Object.entries(signUpOptions)
							.filter(([key]) => {
								if (key !== "phone" && key !== "email") {
									return true;
								}
								if (key === "phone") {
									return !showEmail;
								}
								if (key === "email") {
									return showEmail;
								}
								return false;
							})
							.map(([key, option]) => (
								<button onClick={option.onClick} key={key}>
									<div className="sign-in-option-icons">{option.icon}</div>
									<span>{option.title}</span>
								</button>
							))}
					</div>

					{/* -----------------SIGN-UP SECTION----------------- */}
					<div className="personal-sign-up-input-container">
						<div className="sign-in-options-input-divider">or</div>
						<>
							{toggleLoginOption !== false && (
								<>
									{showEmail === true ? (
										<>
											<p className="sign-in-prompt-msg">Enter your Phone number to get started</p>
											<div className="email-or-input-container">
												<input onChange={e => setSignUpInputs({ ...signUpInputs, phoneInput: e.target.value })} required type="tel" name="phoneNumber" value={signUpInputs.phoneInput} />
												<label className="sign-up-email-or-input-label" htmlFor="phoneNumber">
													Phone Number
												</label>
											</div>
											<p className="terms-and-conditions-phone-signUp">
												We will send a text with a verification code. Message and data rates may apply. By continuing, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
											</p>
											<button className="signUp-continue-btn">
												<span>Continue</span>
											</button>
										</>
									) : (
										<>
											<p className="sign-in-prompt-msg">Enter your Email to get started</p>
											<div className="email-or-input-container">
												<input onChange={e => setSignUpInputs({ ...signUpInputs, emailInput: e.target.value })} required type="text" name="email" value={signUpInputs.emailInput} />
												<label className="sign-up-email-or-input-label" htmlFor="email">
													Email
												</label>
												<p className="terms-and-conditions-email-signUp">
													By continuing, you agree to our
													<a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
												</p>
												<button className="signUp-continue-btn">
													<span>Continue</span>
												</button>
											</div>
										</>
									)}
								</>
							)}
						</>

						{/* -----------------LOGIN SECTION----------------- */}
						{!toggleLoginOption && (
							<>
								{showEmail ? (
									<div>
										<p className="sign-in-prompt-msg">Enter your Phone number to get started</p>
										<div className="email-or-input-container">
											<input onChange={e => setSignUpInputs({ ...signUpInputs, phoneInput: e.target.value })} required type="tel" name="phoneNumber" value={signUpInputs.phoneInput} />
											<label className="sign-up-email-or-input-label" htmlFor="phoneNumber">
												Phone Number
											</label>
										</div>
										<p className="terms-and-conditions-phone-signUp">
											We will send a text with a verification code. Message and data rates may apply. By continuing, you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
										</p>
										<button className="signUp-continue-btn">
											<span>Continue</span>
										</button>
									</div>
								) : (
									<div className="login-inputs-container">
										<div className="login-email-input-container">
											<input required type="text" name="email" />
											<label className="login-email-label-input" htmlFor="email">
												Email
											</label>
										</div>
										<div className="login-password-input-container">
											<input required type="text" name="password" />
											<label className="login-password-label-input" htmlFor="password">
												Password
											</label>
										</div>
										<div className="forgot-password-container">
											<p>Forgot password?</p>
											<button>
												<span>Reset it</span>
											</button>
										</div>
										<button className="login-btn">
											<span>Log in</span>
										</button>
									</div>
								)}
							</>
						)}
					</div>
				</div>
				<div className="signUp-log-in-container">
					{toggleLoginOption ? <p>Already have an account?</p> : <p>Don't have an account?</p>}
					<button onClick={() => setToggleLoginOption(prevVal => !prevVal)}>{toggleLoginOption ? <span>Log in</span> : <span>Sign up</span>}</button>
				</div>
			</div>
			{loginSignUpStatus.isSignUpEnabled && <div className="account-signUp-window-overlay"></div>}
		</>
	);
}
