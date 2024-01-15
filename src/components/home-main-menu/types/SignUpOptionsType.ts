export type SignUpOptionsType = {
	icon: React.ReactNode;
	title: string;
	onClick?: () => void;
};

export type SignUpOptionsMapAsType = {
	[key: string]: SignUpOptionsType;
};
