import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
};

export default Chat;
