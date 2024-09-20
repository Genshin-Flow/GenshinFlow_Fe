import { styled } from "../../../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1129px",
    minWidth: "888px",
    maxHeight: "797px",
    minHeight: "660px",
  },
});

export const TabContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "79px",
    backgroundColor: "primary.01",
    padding: "4px 5px 5px 5px", 
    position: "relative", 
    "&::before": {
      content: '""',
      position: "absolute",
      top: "2px",
      left: "2px",
      right: "2px",
      bottom: "3px",
      border: "2px solid #696969",
      boxSizing: "border-box",
    },
  },
});

export const TabItem = styled("div", {
  base: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "201px",
    height: "100%",
    color: "#F1F1F1",
    fontSize: "20px",
    fontWeight: "medium",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "2px", 
      height: "30px", 
      backgroundColor: "#696969", 
      borderRadius: "1px",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "52px", 
      height: "3px", 
      backgroundColor: "transparent", 
    },
  },
  variants: {
    active: {
      true: {
        fontWeight: "bold",
        "&::before": {
          backgroundColor: "secondary.01",
        },
      },
    },
  },
});