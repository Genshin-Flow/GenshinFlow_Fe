type propsType = {
	[key: string]: never;
};

export default function OauthErrorPage(props: propsType) {
	return <div>{props.message}</div>;
}
