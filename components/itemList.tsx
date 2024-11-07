import { Text, Pressable } from "react-native"
import { Card } from "./ui/card/"
import { VStack } from "./ui/vstack"
import { Heading } from "./ui/heading"
import {Image} from "./ui/image"

import { Link } from "expo-router"
export default function ListItem({ list }) {
    return (
        
      <Link href={`/athletes`}asChild>
      <Pressable className="flex-1">
      <Card className="p-5 rounded-lg max-w-[360px]  flex-1">
       
    <Image
      source={{
        uri: list.image,
        
      }}
      className="mb-6 h-[240px] w-full rounded-md" 
      alt={`${list.name} image`}
      resizeMode="contain"
      
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      {list.stats}
    </Text>
    
      <Heading size="md" className="mb-4">
      {list.teams}
      </Heading>
      <Text size="sm">
       
      </Text>
    
  
  </Card>
  </Pressable>
  </Link>

     
    )
}

