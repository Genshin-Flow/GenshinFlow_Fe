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
  variants: {
    style: {
      default: {},
      genshin: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "#DED7CE",
        borderRadius: "42px",
        borderColor: "#D6D6D6",
        padding: "0 15px",
        minWidth: "none",
        fontSize: "sm",
        color: "gray.01",
      },
    },
    isOpen: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      style: "genshin",
      isOpen: true,
      css: {
        backgroundColor: "#C8B59C", 
      },
    },
  ],
  defaultVariants: {
    style: "default",
    isOpen: false,
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
    style: {
      default: {},
      genshin: {
        width: "20px",
        height: "20px",
        backgroundImage: 'url("/svgs/arrow2.svg")',
      },
    }
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
  variants: {
    style: {
      default: {},
      genshin: {
        top: "calc(100% + 1px)",
        backgroundColor: "none",
        boxShadow: "none",
        borderRadius: "0px",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
      },
    },
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
  variants: {
    style: {
      default: {},
      genshin: {
        height: "32px",
        justifyContent: "center",
        borderRadius: "4px",
        backgroundColor: "#F9F6F1",
        padding: "0 0",
        fontSize: "sm",
        color: "gray.01",
        "&:hover": {
          backgroundColor: "secondary.03",
        },
      },
    },
  },
});

export const DropdownIcon = styled("img", {
  base: {
    width: "16px",
    height: "16px",
  },
});