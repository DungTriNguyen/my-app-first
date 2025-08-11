import { ENV } from "@/configs/env";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import Category from "../ui/category";
import LabelStart from "../ui/label-start";
import Title from "../ui/title";


const MovieCard = ({ item }: { item: Movie }) => {
    return(
    <Link href={`/movies/${item.id}`}>
        <View className='flex w-32 flex-col gap-2'>
            <View>
                <Image source={{ uri: `${ENV.IMAGE_URL}${item.poster_path}` }} className='h-48 w-32 rounded-lg' resizeMode='cover' />
                <View className='absolute -left-6 bottom-0 rounded-full px-2'></View>
            </View>
            <Title title={item.title} />
            <LabelStart numberStart={item.vote_average.toString()} />
            <Category text={item.genre_ids.map(genre => genre.toString()).join(', ')} />
        </View>
    </Link>
    )
}
export default MovieCard