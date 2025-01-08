import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RiContactsBook3Fill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (position) => {
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const navBarOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      position: 10,
    },
    {
      text: "Skills",
      icon: <FaCode />,
      position: document.body.scrollHeight / 7.5,
    },
    {
      text: "Portfolios",
      icon: <MdOutlineDesignServices />,
      position: document.body.scrollHeight / 2.1,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      position: document.body.scrollHeight,
    },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.linksContainer}>
        <a style={styles.link} onClick={() => scrollToSection(0)} href="#home">
          Home
        </a>
        <a
          style={styles.link}
          onClick={() => scrollToSection(document.body.scrollHeight / 7.5)}
          href="#skills"
        >
          <FaCode style={styles.icon} /> Skills
        </a>
        <a
          style={styles.link}
          onClick={() => scrollToSection(document.body.scrollHeight / 2.1)}
          href="#portfolios"
        >
          <MdOutlineDesignServices style={styles.icon} /> Projects
        </a>
        <a
          style={styles.link}
          onClick={() => scrollToSection(document.body.scrollHeight)}
          href="#contact"
        >
          <RiContactsBook3Fill style={styles.icon} /> Contact
        </a>
      </div>

      <div style={styles.menuContainer}>
        <HiOutlineBars3
          style={styles.menuIcon}
          onClick={() => setOpenMenu(true)}
        />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {navBarOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.position)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

// Inline styles for simplicity
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  },
  linksContainer: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  icon: {
    marginRight: "0.5rem",
  },
  linkHover: {
    color: "#61dafb",
  },
  menuContainer: {
    display: "none",
    cursor: "pointer",
  },
  menuIcon: {
    fontSize: "2rem",
  },
  "@media (max-width: 768px)": {
    linksContainer: {
      display: "none",
    },
    menuContainer: {
      display: "block",
    },
  },
};

export default NavigationBar;
