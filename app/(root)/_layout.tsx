import { Slot, Stack } from "expo-router";
import { ReactElement } from "react";

export default function RootLayout(): ReactElement {
  // Minimal Stack layout for the (root) group. Add headers/screens as needed.
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Slot />
    </Stack>
  );
}
