import { styled } from "../../../../../styled-system/jsx";

export const ModalBackground = styled("div", {
	base: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    zIndex: 10,
	},
});

export const ModalContainer = styled("div", {
	base: {
		backgroundColor: "white",
		position: "relative",
	},
});

export const ModalHeader = styled("div", {  
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    backgroundColor: 'primary.01',
    borderBottom: "1px solid #AD8E74",
    color: "white",
    fontSize: "lg",
    fontWeight: "bold",
  },
});

export const CloseButton = styled("button", {
	base: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
    backgroundImage: "url('/svgs/close.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
	},
});

export const ModalContent = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    type: {
      report: {
        padding: "30px",
        paddingBottom: "27px",
        backgroundColor: "white",
      },
      write: {
        padding: "12.5px 20px",
        backgroundColor: "secondary.03",
        border: "10px solid",
        borderColor: "primary.02",
      },
    },
  },
  defaultVariants: {
    type: 'report',
  },
});

export const RadioGroupContainer = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
});

export const RadioColumn = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  variants: {
    right: {
      true: {
        marginRight: "17px",
      },
    },
  },
});

export const ReportInput = styled("input", {
  base: {
    width: "100%",
    height: "33px",
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid",
    borderColor: "gray.04",
    resize: "none",
    fontSize: "sm",
    fontWeight: "medium",
    outline: "none",
    marginBottom: "30px",
  },
});

export const ReportButton = styled("button", {
  base: {
    width: "323",
    height: "48px",
    backgroundColor: "primary.01",
    color: "gray.06",
    fontSize: "md",
    fontWeight: "medium",
    borderRadius: "4px",
    cursor: "pointer",
  },
});