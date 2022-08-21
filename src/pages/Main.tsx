import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Box,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useDispatch } from "react-redux";
import { logoutAction } from "../actions/auth";
import { PageSelector } from "./PageSelector";

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", value: "home" },
  { icon: IconGauge, label: "Dashboard", value: "dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", value: "analytics" },
  { icon: IconCalendarStats, label: "Releases", value: "releases" },
  { icon: IconUser, label: "Account", value: "account" },
  { icon: IconFingerprint, label: "Security", value: "security" },
  { icon: IconSettings, label: "Settings", value: "settings" },
];

export function Main() {
  const { classes } = useStyles();
  const [active, setActive] = useState(mockdata[0].value);
  const dispatch = useDispatch();

  const links = mockdata.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.value === active}
      onClick={() => setActive(link.value)}
    />
  ));

  const handleLogOut = () => {
    dispatch(logoutAction);
  };

  return (
    <Box className={classes.container}>
      <Navbar style={{ maxHeight: "100vh" }} width={{ base: 80 }} p="md">
        <Center>
          <MantineLogo type="mark" size={30} />
        </Center>
        <Navbar.Section grow mt={40}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink
              icon={IconLogout}
              label="Logout"
              onClick={handleLogOut}
            />
          </Stack>
        </Navbar.Section>
      </Navbar>
      <Box className={classes.section}>
        <PageSelector page={active}></PageSelector>
      </Box>
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
  },
  section: {
    backgroundColor: theme.colors.gray[2],
    flexGrow: 1,
    padding: "20px",
  },
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));
