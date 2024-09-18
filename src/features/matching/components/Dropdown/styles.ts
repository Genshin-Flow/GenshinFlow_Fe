import { styled } from "../../../../../styled-system/jsx";

export const DropdownContainer = styled("div", {
  base: {
    position: "relative",
    display: "inline-block",
  },
});

export const DropdownButton = styled("button", {
  base: {
    background: "gray.06",
    color: "gray.03",
    padding: "10px 8px",
    fontSize: "xs",
    fontWeight: "medium",
    border: "1px solid",
    borderColor: "gray.04",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    minWidth: "200px",
    height: "40px",
  },
});

export const Arrow = styled("div", {
  base: {
    width: "10px",
    height: "6px",
    backgroundImage: 'url("/svgs/arrow.svg")',
    backgroundRepeat: 'no-repeat',
  },
  variants: {
    direction: {
      up: {
        transform: "rotate(180deg)",
      },
      down: {
        transform: "rotate(0deg)",
      },
    },
  },
});

export const DropdownList = styled("ul", {
  base: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "gray.06",
    boxShadow: "0px 4px 20px 0px rgba(22, 22, 22, 0.2)",
    zIndex: 1,
    listStyle: "none",
    padding: 0,
    margin: 0,
    borderRadius: "8px",
    overflow: "hidden",
  },
});

export const DropdownItem = styled("li", {
  base: {
    padding: "8px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.03",
    "&:hover": {
      backgroundColor: "gray.05",
      // color: "white",
    },
  },
});

export const DropdownIcon = styled("img", {
  base: {
    width: "16px",
    height: "16px",
  },
});