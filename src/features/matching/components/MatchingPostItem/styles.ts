import { styled } from "../../../../../styled-system/jsx";

const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const flexItem = {
  ...flexCenter,
  flex: '1 1 auto',
};

export const Text = styled('p', {
  base: {
    margin: 0,
  },
  variants: {
    size: {
      xs: { textStyle: 'xs' },
      sm: { textStyle: 'sm' },
      md: { textStyle: 'md' },
      lg: { textStyle: 'lg' },
    },
    color: {
      gray01: { color: 'gray.01' },
      gray02: { color: 'gray.02' },
      gray03: { color: 'gray.03' },
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'gray01',
  },
});

export const ItemContainer = styled("div", {
  base: {
    boxSizing: 'border-box',
    display: "flex",
    alignItems: "center",
    maxWidth: "1116px",
    minWidth: "880px",
    width: "100%",
    height: "60px",
    backgroundColor: '#F9F6F1',
    borderBottom: '1px solid {colors.gray.05}',
  },
});

export const UserName = styled("div", {
  base: {
    ...flexItem,
    flex: '1 1 200px',
  },
});

export const ProfileImage = styled("div", {
  base: {
    backgroundColor: "gray.04",
    borderRadius: "50%",
    height: "36px",
    width: "36px",
    objectFit: "cover",
    marginRight: "8px",
  },
});

export const UserInfo = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const UserIdButton = styled("button", {
  base: {
    cursor: "pointer",
    textStyle: 'xs',
    color: 'gray.03',
    paddingLeft: '16px',
    backgroundImage: 'url("/svgs/clarity_paste-line.svg")',
    backgroundSize: '12px 12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
  },
});

export const QuestType = styled(UserName, {
  base: {
    // backgroundColor: 'secondary.03',
  }
});

export const QuestIconWrapper = styled('div', {
  base: {
    position: 'relative',
    width: '30px',
    height: '30px',
    marginRight: '20px',
  }
});

export const QuestIcon = styled('div', {
  base: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: 'inset 1px 4px 2px 0 rgba(192, 192, 192, 0.25), inset -1px -4px 2px 0 rgba(229, 218, 218, 0.25)',
  }
});

export const CenteredImage = styled('img', {
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '28px', 
    height: '28px', 
  }
});

export const WorldLevel = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 100px',
  }
});

export const Message = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 386px',
    padding: '0 19px',
    minWidth: '0',
  }
});

export const MessageText = styled('div', {
  base: {
    display: 'line-block',
    alignItems: 'center',
    justifyContent: 'left',
    width: '100%',
    maxWidth: '348px',
    backgroundColor: 'gray.06',
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid {colors.gray.04}',
    textStyle: 'sm',
    color: 'gray.01',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '0',
  },
});

export const TimeAgo = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 140px',
    textStyle: 'sm',
    color: 'gray.02',
  }
});

export const MoreOptions = styled('div', {
  base: {
    ...flexItem,
    flex: '1 1 90px',
    position: 'relative',
  }
});

export const MoreOptionsButton = styled('button', {
  base: {
    cursor: 'pointer',
    width: '48px',
    height: '48px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center',
  },
  variants: {
    type: {
      report: {
        backgroundImage: 'url("/svgs/report.svg")',
      },
      moreOption: {
        backgroundImage: 'url("/svgs/moreoption.svg")',
      },
    },
  },
  defaultVariants: {
    type: 'report',
  },
});

export const MenuContainer = styled('div', {
  base: {
    position: 'absolute',
    top: '45px',
    right: '50%',
    transform: 'translateX(-50%, 0)',
    backgroundColor: 'white',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    zIndex: 1000,
  },
});

export const MenuItem = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "120px",
    padding: '8px 0',
    fontSize: '16px',
    fontWeight: 'medium',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
});