import { styled } from "../../../../../styled-system/jsx";

export const ItemContainer = styled("div", {
  base: {
    boxSizing: 'border-box',
    display: "flex",
    alignItems: "center",
    maxWidth: "1116px",
    minWidth: "890px",
    width: "100%",
    height: "60px",
    backgroundColor: '#F9F6F1',
    borderBottom: '1px solid #E7E7E7',
  },
});

export const UserName = styled("div", {
  base: {
    display: "flex",
    flex: '1 1 200px',
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export const ProfileImage = styled("div", {
  base: {
    backgroundColor: "#D9D9D9",
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

export const UserNameText = styled("p", {
  base: {
    fontSize: "14px",
    fontWeight: "medium",
    color: "#161616",
  },
});

export const UserIdButton = styled("button", {
  base: {
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "medium",
    color: "#9A9A9A",
  },
});

export const QuestType = styled(UserName, {
  base: {
    flex: '1 1 200px',
  }
})

export const QuestIcon = styled('div', {
  base: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    marginRight: '20px',
  }
})

export const QuestText = styled(UserNameText)

export const WorldLevel = styled('div', {
  base: {
    display: 'flex',
    flex: '1 1 100px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
})

export const WorldLevelText = styled(UserNameText)

export const Message = styled('div', {
  base: {
    display: 'flex',
    flex: '1 1 386px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 19px',
    minWidth: '0',
  }
})

export const MessageText = styled('div', {
  base: {
    display: 'line-block',
    alignItems: 'center',
    justifyContent: 'left',
    width: '100%',
    maxWidth: '348px',
    backgroundColor: '#F4F4F4',
    padding: '8px 10px',
    borderRadius: '8px',
    border: '1px solid #C4C4C4',
    fontSize: '14px',
    fontWeight: 'medium',
    color: '#161616',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: '0',
  },
});

export const TimeAgo = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 1 140px',
    height: '100%',
    fontSize: '14px',
    fontWeight: 'medium',
    color: '#707070',
  }
})


export const MoreOptions = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 1 90px', 
    height: '100%',
  }
})