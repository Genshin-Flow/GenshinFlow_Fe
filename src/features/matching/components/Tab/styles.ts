import { styled } from "../../../../../styled-system/jsx";

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const fontStyle = {
  color: "gray.01",
  fontSize: "14px",
  fontWeight: "bold",
};

const flexItem = {
  ...flexCenter,
  ...fontStyle,
  position: "relative",
  cursor: "pointer",
  flex: '1 1 auto',
};

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1129px",
    minWidth: "888px",
    height: "797px",
    minHeight: "660px",
    backgroundColor: "primary.02",
    overflow: "hidden",
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
    flexShrink: 0,
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

export const MatchingMenu = styled("div", {
  base: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    marginTop: "30px",
    marginBottom: "30px",
    flexShrink: 0,
    "& div": {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }
  },
});

export const WriteButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "113px",
    height: "40px",
    backgroundColor: "primary.01",
    color: "secondary.03",
    fontSize: "14px",
    fontWeight: "medium",
    letterSpacing: "0",
    borderRadius: "4px",
    cursor: "pointer",
    border: "1px solid #696969",
    backgroundImage: "url('/svgs/write.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "24px 24px",
    backgroundPosition: "10px center",
    paddingLeft: "35px",
    boxSizing: "border-box",
  },
});

export const MatchingHeader = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1124px",
    minWidth: "883px",
    width: "100%",
    height: "32px",
    marginLeft: "5px",
    backgroundColor: "gray.06",
    flexShrink: 0,
  },
});

export const UserName = styled("div", {
  base: {
    ...flexItem,
    flex: '1 1 200px',
  },
  variants: {
    select: {
      true: {
        color: "secondary.01",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "53px", // 37 + 16
          height: "2px", 
          backgroundColor: "secondary.01", 
        },
      }
    }
  }
});

export const QuestType = styled(UserName, {
  base: {
  },
  variants: {
    select: {
      true: {
        color: "secondary.01",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px", // 64 + 16
          height: "2px", 
          backgroundColor: "secondary.01", 
        },
      }
    }
  }
});

export const WorldLevel = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 100px',
  },
  variants: {
    select: {
      true: {
        color: "secondary.01",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "68px", // 52 + 16
          height: "2px", 
          backgroundColor: "secondary.01", 
        },
      }
    }
  }
});

export const Message = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 386px',
  },
  variants: {
    select: {
      true: {
        color: "secondary.01",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "53px", // 37 + 16
          height: "2px", 
          backgroundColor: "secondary.01", 
        },
      }
    }
  }
});

export const TimeAgo = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 140px',
  },
  variants: {
    select: {
      true: {
        color: "secondary.01",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "65px", // 49 + 16
          height: "2px", 
          backgroundColor: "secondary.01", 
        },
      }
    }
  }
});

export const MoreOptions = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 90px',
  }
});

export const Gap = styled('div', {
  base: {
    width: "8px",
    height: "100%",
  }
});

export const PostList = styled('div', {
  base: {
    marginTop: "1px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    mx: "auto",
    flexGrow: 1,
    paddingLeft: "5px",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "6px",
      backgroundColor: "#F4F4F4",
      borderRadius: "2px",
      border: "1px solid transparent",
      backgroundClip: "padding-box",
      backgroundImage:  "url('/svgs/scroll.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "4px calc(100% - 2px)",
      backgroundPosition: "center center",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "gray.01",
      borderRadius: "2px",
    },
  }
});