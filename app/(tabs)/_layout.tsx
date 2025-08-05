import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";

import TabIcon from "@/components/ui/tab-icon";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

import { icons } from "@/constants/icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 w-full">
        <View className="flex-1">
          <Image
            source={require("@/assets/images/bg.png")}
            resizeMode="cover"
            className="absolute w-full z-0 bg-[#030014]"
          />
        </View>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: useClientOnlyValue(false, true),
            tabBarItemStyle: {
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
            tabBarStyle: {
              backgroundColor: "#0F0D23",
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 52,
              position: "absolute",
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#0F0D23",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.home} focused={focused} title="home" />
              ),
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={Colors[colorScheme ?? "light"].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "search",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon title="search" focused={focused} icon={icons.search} />
              ),
            }}
          />
          <Tabs.Screen
            name="save"
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon title="save" focused={focused} icon={icons.save} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerShown: false,
              title: "profile",
              tabBarIcon: ({ focused }) => (
                <TabIcon
                  title="profile"
                  focused={focused}
                  icon={icons.person}
                />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
