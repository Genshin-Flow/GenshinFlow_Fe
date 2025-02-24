import { styled } from "@/../styled-system/jsx";

export const FilterContainer = styled("div", {
	base: {
		display: "flex",
		width: "100%",
		height: "40px",
		gap: "20px",
		justifyContent: "space-between",
		"& > *": {
			flex: "1 1 auto",
			maxWidth: "100%",
		},
	},
});
