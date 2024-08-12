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
    minWidth: "890px",
    width: "100%",
    height: "60px",
    backgroundColor: 'secondary.03',
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
  },
});

export const QuestType = styled(UserName);

export const QuestIcon = styled('div', {
  base: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    marginRight: '20px',
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
  }
});