import type { DeepPartial, Theme } from "@chakra-ui/react";

const extendedColors: DeepPartial<Record<
  string,
  Theme["colors"]["blackAlpha"]
>> = {
  text: {
    100: "#010504",
    900: "#E7FFF1",
  },
};

export const colors = {
  ...extendedColors,
};
