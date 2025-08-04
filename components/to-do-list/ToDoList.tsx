import {
  View,
  FlatList,
  Text,
  Pressable,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import image1 from "../../assets/images/icon.png";
import { cssInterop } from "nativewind";
cssInterop(Image, { className: "style" });

interface Item {
  id: number;
  title: string;
  description: string;
}
const ToDoList = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [item, setItem] = useState([
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs" },
    { id: 2, title: "Walk the dog", description: "30 minutes in the park" },
    { id: 3, title: "Read a book", description: "Finish 'The Great Gatsby'" },
  ]);

  const addItem = (itemselect: Item) => {
    setItem([...item, itemselect]);
    setName("");
    setDescription("");
  };
  return (
    <KeyboardAvoidingView>
      <View className="px-2 gap-y-4">
        <View className="flex items-center justify-center ">
          <Text className="text-2xl font-bold mb-4 text-center">
            To-Do List
          </Text>
        </View>
        <View className="h-32 w-max shadow-2xl rounded ">
          <Image source={image1} className="w-full h-full" />
        </View>

        <View>
          <Text className="text-sm font-semibold ">Tasks</Text>
          <TextInput
            value={name}
            onChangeText={(name) => setName(name)}
            placeholder="Add a new task"
            multiline
            className="border border-2-gray rounded-md px-1 py-2"
          />
        </View>
        <View>
          <Text className="text-sm font-semibold ">Description Task</Text>
          <TextInput
            value={description}
            onChangeText={(description) => setDescription(description)}
            placeholder="description Task"
            multiline
            editable={true}
            className="border border-2-gray rounded-md px-1 py-2"
          />
        </View>

        <View className="bg-[#435DDE] rounded-md m-4">
          <Button
            color="white"
            onPress={() =>
              addItem({
                id: item.length + 1,
                title: name,
                description: description,
              })
            }
            title="Add List"
          />
        </View>
        <FlatList
          keyExtractor={(item) => item.id + ""}
          data={item}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
            >
              <View className="flex items-center justify-center p-4 border border-gray-300 rounded-lg mb-2">
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ToDoList;
