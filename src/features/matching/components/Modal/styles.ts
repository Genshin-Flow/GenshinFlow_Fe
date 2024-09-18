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

export const UserQuestContainer = styled("div", {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: "80px",
    marginBottom: "16px",
  },
});

export const UserInfo = styled("div", {
  base: {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    "& p": {
      fontSize: "sm",
      fontWeight: "bold",
      color: "gray.01",
      marginBottom: "20px",
    },
  },
});

export const InputContainer = styled("div", {
  base: {
    width: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textStyle: "sm",
    color: "gray.01",
  },
});

export const TextInput = styled("input", {
  base: {
    display: "flex",
    alignItems: "center",
    width: "240px",
    height: "36px",
    borderBottom: "1px solid",
    borderColor: "gray.01",
    textStyle: "xs",
    color: "gray.03",
    outline: "none",
  },
});

export const QuestInfo = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    width: "360px",
    "& p": {
      fontSize: "sm",
      fontWeight: "bold",
      color: "gray.01",
      marginBottom: "20px",
    },
  },
});

export const Content = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    "& p": {
      fontSize: "sm",
      fontWeight: "bold",
      color: "gray.01",
      marginBottom: "20px",
    },
  },
});

export const ContentInput = styled("textarea", {
  base: {
    width: "100%",
    height: "56px",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "gray.04",
    backgroundColor: "gray.06",
    resize: "none",
    fontSize: "xs",
    fontWeight: "medium",
    color: "gray.01",
    outline: "none",
  },
});

export const Options = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "& p:first-child": {
      fontSize: "sm",
      fontWeight: "bold",
      color: "gray.01",
    },
    "& div": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

export const PasswordInput = styled("input", {
  base: {
    display: "flex",
    alignItems: "center",
    padding: "10px 8px",
    width: "200px",
    height: "40px",
    border: "1px solid",
    borderColor: "gray.04",
    backgroundColor: "gray.06",
    borderRadius: "8px",
    textStyle: "xs",
    color: "gray.03",
    outline: "none",
  },
});

export const WarningText = styled("p", {
  base: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "46px",
    fontSize: "xs",
    fontWeight: "regular",
    color: "secondary.01",
    backgroundImage: "url('/svgs/warning.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "10px center",
  },
});

export const Btns = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      gap: "20px",
    },
  },
});

export const Button = styled("button", {
  base: {
    width: "80px",
    height: "40px",
    fontSize: "md",
    fontWeight: "medium",
    borderRadius: "8px",
    cursor: "pointer",
    color: "white",
  },
  variants: {
    type: {
      cancel: {
        backgroundColor: "gray.04",
      },
      submit: {
        backgroundColor: "secondary.01",
      },
    },
  },
  defaultVariants: {
    type: "submit",
  },
});