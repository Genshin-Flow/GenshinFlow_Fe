import { styled } from "../../../../../styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "340px",
    height: "100%",
    gap: "20px",
    flexShrink: 0,
  },
});

export const IconContainer = styled("div", {
	base: {
    backgroundColor: "primary.01",
    width: "340px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
	},
});

export const IconWrapper = styled("div", {
  base: {
    flex: "1 1 calc(33.333% - 16px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "55px",
    fontSize: "12px",
    fontWeight: "regular",
    color: "white",
  },
});

export const Icon = styled("img", {
  base: {
    width: "50px",
    height: "51.93px",
    marginBottom: "4px",
    cursor: "pointer",
  },
});

export const MenuContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "340px",
    padding: "20px 48px",
    borderRadius: "10px",
    backgroundColor: "#F9F6F1",
  },
});

export const SiteStats = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "244px",
    height: "86px",
    borderRadius: "10px",
    padding: "13px 15px",
    backgroundColor: "#FFFFFD",
    border: "4px solid #AD8E74",
    mx: "auto",
    "& div": {
      display: "flex", 
      width: "100%",
      justifyContent: "space-between",
    }
  },
});

export const StatsTitle = styled("div", {
  base: {
    fontSize: "16px",
    fontWeight: "regular",
    color: "#000000",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
  },
  variants: {
    icon: {
      star: {
        backgroundImage: "url('/images/star.png')",
        backgroundSize: "21px 21px",
        paddingLeft: "33px",
      },
      note: {
        backgroundImage: "url('/images/note.png')",
        backgroundSize: "24px 21px",
        paddingLeft: "33px",
      }
    }
  }
});