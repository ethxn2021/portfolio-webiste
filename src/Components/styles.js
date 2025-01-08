export const styles = {
  terminalScreen: {
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "1rem",
    backgroundColor: "#1e1e1e",
    color: "#d4d4d4",
    fontFamily: "'Courier New', Courier, monospace",
    maxWidth: "700px",
    margin: "auto",
  },
  terminalSelections: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#252526",
    padding: "0.5rem",
    borderRadius: "6px 6px 0 0",
  },
  hiddenText: {
    fontSize: "0.9rem",
    color: "#888",
  },
  activeTab: {
    color: "green",
    textDecoration: "underline",
  },
  terminalOption: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.2rem",
  },
  icon: {
    cursor: "pointer",
    color: "#888",
    transition: "color 0.3s",
  },
  moreOptions: {
    fontSize: "1rem",
    cursor: "pointer",
  },
  terminalText: {
    marginTop: "1rem",
    lineHeight: "1.5",
  },
  info: {
    color: "#00c8ff",
  },
  reactIcon: {
    fontSize: "1.2rem",
    marginLeft: "0.5rem",
    color: "#61dafb",
  },
  button: {
    marginLeft: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#007acc",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
  terminalPrompt: {
    marginTop: "1rem",
    color: "#d4d4d4",
  },
  cursor: {
    animation: "blink 1s infinite",
  },
};
