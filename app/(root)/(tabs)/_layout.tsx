import { Tabs } from "expo-router";
import { ReactElement } from "react";

export default function TabsLayout(): ReactElement {
  // Minimal tab layout — add options and icons as needed
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="rides" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
