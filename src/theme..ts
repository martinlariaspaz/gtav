import { MantineTheme } from "@mantine/core";

interface Theme extends Partial<MantineTheme> {
  color: {
    darkBlue: string;
  };
}

const theme: Theme = {
  color: {
    darkBlue: "darkblue",
  },
};

export default theme;
