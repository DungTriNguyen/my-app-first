import { ENV } from '@/configs/env'
import {Client, Databases, ID, Query} from 'react-native-appwrite'

const client  = new Client()
 .setEndpoint('https://cloud.appwrite.io/v1')
 .setProject(ENV.APPWRITE_PROJECT!)
 

const databases = new Databases(client)

export const updateSearchCount = async (query: string, movie: Movie) => {
   try{
    const result = await databases.listDocuments(ENV.APPWRITE_DATABASE_ID, ENV.APPWRITE_COLLECTION_ID, [
        Query.equal('query', query),
        Query.equal('movieId', movie.id),
    ])
    if (result.documents.length > 0) {
        const document = result.documents[0]
        const newCount = document.searchCount + 1
        await databases.updateDocument(ENV.APPWRITE_DATABASE_ID, ENV.APPWRITE_COLLECTION_ID, document.$id, {
            searchCount: newCount
        })
    }else{
        await databases.createDocument(ENV.APPWRITE_DATABASE_ID, ENV.APPWRITE_COLLECTION_ID, ID.unique(), {
            query,
            movieId: movie.id,
            searchCount: 1,
            title: movie.title,
            poster_url: `${ENV.IMAGE_URL}${movie.poster_path}`
        })
    }
   }catch(error){
    console.log(error)
   }
}

