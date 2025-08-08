import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Image } from 'expo-image'
import { cssInterop } from 'nativewind'
import { useState } from 'react'
import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import image1 from '../../assets/images/logo.png'
import ButtonPressable from '../ui-learn/button-pressable'
import ButtonTouchableHightLight from '../ui-learn/button-touchablehightlight'
import ButtonTouchAbleWithoutFeedback from '../ui-learn/button-touchablewithoutfeedback'
import ButtonTouchAbleOpacity from '../ui-learn/button-touchsableopacity'
import LinkingComponent from '../ui/linking'
cssInterop(Image, { className: 'style' })

interface Item {
  id: number
  title: string
  description: string
}
const ToDoList = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [modalDelete, setModalDelet] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [item, setItem] = useState([
    { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs' },
    { id: 2, title: 'Walk the dog', description: '30 minutes in the park' },
    { id: 3, title: 'Read a book', description: "Finish 'The Great Gatsby'" },
  ])
  const addItem = (itemselect: Item) => {
    if (!name || !description) {
      alert('Please fill in both fields')
      return
    }
    Keyboard.dismiss()
    setItem([...item, itemselect])
    setName('')
    setDescription('')
  }

  const removeItem = (id: number) => {
    setItem(item.filter(item => item.id !== id))
  }

  const updateItem = (id: number, updatedItem: Partial<Item>) => {
    setItem(prevItems => prevItems.map(task => (task.id === id ? { ...task, ...updatedItem } : task)))
    setName('')
    setDescription('')
  }
  return (
    <KeyboardAvoidingView>
      <ScrollView nestedScrollEnabled={true}>
        <View className='gap-y-4 px-2'>
          <View className='flex items-center justify-center '>
            <Text className='mb-4 text-center text-2xl font-bold'>To-Do List</Text>
          </View>
          <View className='h-32 w-max rounded shadow-2xl '>
            <Image source={image1} className='h-full w-full' />
          </View>

          <View>
            <Text className='text-sm font-semibold '>Tasks</Text>
            <TextInput
              keyboardType='default'
              value={name}
              onChangeText={name => setName(name)}
              placeholder='Add a new task'
              multiline
              className='border-2-gray rounded-md border px-1 py-2'
            />
          </View>
          <View>
            <Text className='text-sm font-semibold '>Description Task</Text>
            <TextInput
              value={description}
              onChangeText={description => setDescription(description)}
              placeholder='description Task'
              multiline
              editable={true}
              className='border-2-gray rounded-md border px-1 py-2'
            />
          </View>

          <Button
            onPress={() =>
              addItem({
                id: item.length + 1,
                title: name,
                description: description,
              })
            }
            title='Add List'
          />
          <FlatList
            keyExtractor={item => item.id + ''}
            data={item}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setModalDelet(true)
                  setSelectedItem(item)
                  setName(item.title)
                  setDescription(item.description)
                }}
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
              >
                <View className='mb-2 flex flex-row items-center justify-between rounded-lg border border-gray-300 p-4'>
                  <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
                  <MaterialCommunityIcons
                    onPress={() => {
                      setModalVisible(true)
                      setName(item.title)
                      setDescription(item.description)
                      setSelectedItem(item)
                    }}
                    name='notebook-edit'
                    size={24}
                    color='black'
                  />
                </View>
              </Pressable>
            )}
          />
          <Modal visible={modalVisible} animationType='slide'>
            <SafeAreaProvider>
              <SafeAreaView>
                <View className='flex gap-8 p-4'>
                  <View className='gap-2'>
                    <Text>Task</Text>
                    <TextInput
                      value={name}
                      onChangeText={name => setName(name)}
                      className='border-2-gray rounded-md border px-1 py-2'
                      multiline
                      numberOfLines={4}
                    />
                  </View>
                  <View className='gap-2'>
                    <Text>Description task</Text>
                    <TextInput
                      value={description}
                      onChangeText={description => setDescription(description)}
                      className='border-2-gray rounded-md border px-1 py-2'
                      multiline
                      numberOfLines={4}
                    />
                  </View>
                  <View>
                    <Button
                      title='Update'
                      onPress={() => {
                        if (selectedItem) {
                          updateItem(selectedItem.id, {
                            title: name,
                            description: description,
                          })
                          setModalVisible(false)
                          setSelectedItem(null)
                        }
                      }}
                    />
                  </View>

                  <Button color={'red'} onPress={() => setModalVisible(false)} title='Close model' />
                </View>
              </SafeAreaView>
            </SafeAreaProvider>
          </Modal>

          <Modal visible={modalDelete} animationType='slide'>
            <SafeAreaView>
              <View className='flex gap-8 rounded-lg border border-red-500 p-4'>
                <View className='flex justify-center  gap-4'>
                  <Text className='text-center text-lg font-bold'>Are you sure you want to delete this task?</Text>
                  <View className='flex flex-row gap-4 '>
                    <Text className='font-semibold'>Task:</Text>
                    <Text>{selectedItem?.title}</Text>
                  </View>
                  <View className='flex flex-row gap-4 '>
                    <Text className='font-semibold'>Description task:</Text>
                    <Text>{selectedItem?.description}</Text>
                  </View>
                </View>
                <View>
                  <Button
                    color={'red'}
                    onPress={() => {
                      if (selectedItem) {
                        removeItem(selectedItem.id)
                        setModalDelet(false)
                        setSelectedItem(null)
                      }
                    }}
                    title='Delete'
                  />
                </View>
                <View>
                  <Button
                    onPress={() => {
                      setModalDelet(false)
                      setSelectedItem(null)
                    }}
                    title='Cancel'
                  />
                </View>
              </View>
            </SafeAreaView>
          </Modal>
          <ButtonPressable onPress={() => alert('GOGOGOGOGOGO')} />
          <ButtonTouchAbleOpacity props={{ onPress: () => alert('GOGOGOGOGOGO') }} />
          <ButtonTouchAbleWithoutFeedback props={{ onPress: () => alert('GOGOGOGOGOGO') }} />
          <ButtonTouchableHightLight props={{ onPress: () => alert('GOGOGOGOGOGO') }} />

          <LinkingComponent />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ToDoList
