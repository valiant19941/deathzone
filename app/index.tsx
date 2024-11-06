import {Text, View, FlatList} from 'react-native'
import fighters from '../assets/fighters.json'
import ListItem from '../components/itemList'

export default function homeScreen() {
    return(
        <FlatList data={fighters}
        numColumns={2}
        contentContainerClassName='gap-2'
        columnWrapperClassName='gap-2'
        renderItem={({item})=> <ListItem list={item}/>}
        />
    )
}