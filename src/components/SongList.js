import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        //.map produce a new array of jsx elements
        return this.props.songs.map((song) => {
            return (
                <div className="item" key = { song.title }>
                    <div className="right floated content">
                        <botton 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </botton>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        //console.log(this.props);
        // this.props === { songs: state.songs }
        return <div className="ui divided list">{ this.renderList() }</div>;
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    //console.log(this.props.songs);
    return { songs: state.songs };
}
// connect function automatically called store.dispatch before action creators
export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList);