import MovieCard from '@/components/section/MovieCard'
import SearchInput from '@/components/ui/search-input'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { updateSearchCount } from '@/services/appWriteService'
import { getListFilm } from '@/services/productService'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
const Search = () => {
  const [search, setSearch] = useState<string>('')
  const [movies, setMovies] = useState<Movie[]>([])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchData = async () => {
        try{
          const dataSearch = await getListFilm({ query: search })
          setMovies(dataSearch)
        }catch(error){
          console.log(error)
        }
      }
      fetchData()
      if(search.trim()){
        const fetchData = async () => {
          try{
            const dataSearch = await getListFilm({ query: search })
            setMovies(dataSearch)
            if(dataSearch.length > 0 && dataSearch?.[0]){
              await updateSearchCount(search, dataSearch[0] as Movie)
            }
          }catch(error){  
            console.log(error)
          }
        }
        fetchData()
       console.log('searchasdcnndhjf: ', search);
       
      }
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [search])
  const onChangeText = (text: string) => {
    setSearch(text)
  }

  return <View className='flex-1 bg-[#030014]'>
    <View className='flex-1'><Image source={images.bg} className='absolute z-0 w-full' resizeMode='cover' /></View>
    <FlatList
      data={movies}
      numColumns={3}
      contentContainerClassName='gap-6'
      keyExtractor={item => item.id + ''}
      columnWrapperStyle={{
        justifyContent: 'flex-start',
        gap: 16,
        marginVertical: 16,
      }}
      className='mx-auto'
      contentContainerStyle={{ paddingBottom: 100, justifyContent: "space-between" }}
      renderItem={({ item }) => <MovieCard item={item} />}
      ListHeaderComponent={
        <>
          <View className='mt-20 w-full flex-row items-center justify-center'>
            <Image source={icons.logo} className='h-10 w-12' />
          </View>

          <View className='my-5'>
            <SearchInput placeholder='Search for a movie' value={search} onChangeText={onChangeText} />
          </View>
        </>
      }
    />
  </View>
}
export default Search
