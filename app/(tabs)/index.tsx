
import { Text, View } from "@/components/Themed";
import ToDoList from "@/components/to-do-list/ToDoList";
import { Image, ImageBackground } from "react-native";
import {images} from "@/constants/images";
export default function TabOneScreen() {
  return (
    // <ToDoList/>
    <View>
      <Image
        source={images.bg}
        resizeMode="cover"
        className="absolute w-full z-0 bg-[#030014]"
      />
    </View>
  );
}
