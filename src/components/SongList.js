import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    renderList() {
        //.map produce a new array of jsx elements
        return this.props.songs.map((song) => {
            return (
                <div className="item" key = { song.title }>
                    <div className="right floated content">
                        <botton className="ui button primary">
                            Select
                        </botton>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props === { songs: state.songs }
        return <div>{ this.renderList() }</div>;
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    //console.log(this.props.songs);
    return { songs: state.songs };
}

export default connect(mapStateToProps) (SongList);