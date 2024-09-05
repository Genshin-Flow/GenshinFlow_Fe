type propsType = {
	[key: string]: string;
};

export default function OauthErrorPage(props: propsType) {
	return <div>{props.message}</div>;
}
