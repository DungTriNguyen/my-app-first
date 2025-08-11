import { Tabs } from 'expo-router'
import React from 'react'
import TabIcon from '@/components/ui/tab-icon'
import { icons } from '@/constants/icons'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='w-full flex-1 bg-[#030014]'>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle: {
              backgroundColor: '#0F0D23',
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 52,
              position: 'absolute',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: '#0F0D23',
            },
          }}
        >
          <Tabs.Screen
            name='index'
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} focused={focused} title='home' />,
            }}
          />
          <Tabs.Screen
            name='search'
            options={{
              title: 'search',
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon title='search' focused={focused} icon={icons.search} />,
            }}
          />
          <Tabs.Screen
            name='save'
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon title='save' focused={focused} icon={icons.save} />,
            }}
          />
          <Tabs.Screen
            name='profile'
            options={{
              href: null,
              headerShown: false,
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
  )
}
