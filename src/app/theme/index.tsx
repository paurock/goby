import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";

import { colors } from "./colors";
import { Button } from "./components/Button";
import { fonts } from "./fonts";

export const customTheme = extendTheme({
  fonts,
  colors,
  breakpoints,
  components: {
    Button,
  },
});
