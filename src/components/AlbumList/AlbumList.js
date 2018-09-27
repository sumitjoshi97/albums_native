import React, { Component } from 'react'
import { View } from 'react-native'
import axios from 'axios'

// import files 
import Album from './Album/Album'

class AlbumList extends Component {
    state = { albums: [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }))
    }

    // function to map albums array to separate album component
    renderAlbums() {
        return this.state.albums.map(album => 
            <Album 
                key={album.title}
                albumTitle={album.title} 
                albumArtist={album.artist}
                albumThumbnail={album.thumbnail}
                albumImg={album.image}
                albumUrl={album.url}
            />);
    }

    // rendering the albumlist component
    render() {
        return (
            <View>
                {this.renderAlbums()}
                {console.log(this.state.albums)}
            </View>
        )
    }
}

export default AlbumList