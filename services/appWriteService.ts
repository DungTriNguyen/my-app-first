import { ENV } from '@/configs/env'
import {Client, Databases, ID, Query} from 'react-native-appwrite'



const client  = new Client()
 .setEndpoint('http://clound.appwrite.io/v1')
 .setProject(ENV.APPWRITE_PROJECT!)

export const updateSearchCount = async (query: string, movie: Movie) => {

} 