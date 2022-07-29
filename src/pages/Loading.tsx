import { createStyles } from "@mantine/core";
import { IconCoffee, IconLoaderQuarter } from "@tabler/icons";

export const Loading = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.loadingBox}>
        <IconLoaderQuarter color="#25262b" size={60} />
        <h1 className={classes.loadingMessage}>Loading content...</h1>
        <IconCoffee color="#25262b" size={35} />
      </div>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.colors.dark[6],
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px white",
    backgroundColor: theme.colors.gray[1],
    height: "auto",
    color: theme.colors.dark[6],
    padding: "20px 20px",
  },
  loadingMessage: {
    margin: "0 10px 0px 30px",
  },
}));
