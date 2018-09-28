import React from "react";
import { View, Text, Image } from "react-native";
import Card from "../../Card/Card";
import CardItem from "../../Card/CardItem/Carditem";

const Album = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStye,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStye}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image style={imageStyle} source={{ uri: image }} />
        {console.log(image)}
      </CardItem>
    </Card>
  );
};

//stylesheet
const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStye: {
    fontSize: 22
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: 300,
    flexGrow: 1
  }
};

export default Album;
