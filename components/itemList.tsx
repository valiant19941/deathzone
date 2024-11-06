import { Text } from "react-native"
import { Card } from "./ui/card/"
import { VStack } from "./ui/vstack"
import { Heading } from "./ui/heading"
import {Image} from "./ui/image"
import { Button, ButtonText } from "./ui/button"
import { Box } from "./ui/box"
export default function ListItem({ list }) {
    return (
        <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
      <Image
        source={{
          uri: list.image,
        }}
        className="mb-6 h-[240px] w-full rounded-md"
        alt={`${list.name} image`} resizeMode="contain"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        stats {list.stats}
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          {list.name} 
        </Heading>
        <Text size="sm">
        </Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Text> {list.teams} GYM </Text>
     
      </Box>
    </Card>
    )
}