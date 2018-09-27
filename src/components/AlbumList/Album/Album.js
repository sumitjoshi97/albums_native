import React from 'react'
import { Text } from 'react-native'
import Card from '../../Card/Card'

const Album = ({albumTitle, albumArtist, albumThumbnail, albumImg, albumUrl}) => {
  return (
    <Card>
        <Text>{albumTitle}</Text>
        <Text>{albumArtist}</Text>


    </Card>
  )
}

export default Album