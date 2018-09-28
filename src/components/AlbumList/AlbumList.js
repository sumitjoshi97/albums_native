import React, { Component } from 'react'
import { ScrollView } from 'react-native'
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
                album={album}
            />);
    }

    // rendering the albumlist component
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
                {console.log(this.state.albums)}
            </ScrollView>
        )
    }
}

export default AlbumList