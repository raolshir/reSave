import { ScrollView, Text, View, Image } from "react-native";
import { images } from "@/constants";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex bg-white">
        <View className="relative w-full h-[250px] mb-5">
          <Image
            source={images.signupLogo}
            className="z-0 w-full h-[250px] rounded-[20px]"
          />
        </View>
        <Text className="text-black text-2xl font-JakartaBold mx-10 text-center">
          Create Account
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
