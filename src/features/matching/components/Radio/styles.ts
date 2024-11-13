import { styled } from "../../../../../styled-system/jsx";

export const RadioLabel = styled("label", {
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "sm",
    fontWeight: "medium",
    color: "#000000",
    cursor: "pointer",
  },
});

export const RadioInput = styled("input", {
  base: {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
    "& + span": {
      display: "inline-block",
      width: "20px",
      height: "20px",
      background: "url('/svgs/unchecked.svg') no-repeat center center",
      backgroundSize: "contain",
    },
    "&:checked + span": {
      background: "url('/svgs/checked.svg') no-repeat center center",
      backgroundSize: "contain",
    },
  },
});

export const RadioSpan = styled("span", {
  base: {
    marginRight: "11px",
  },
});