import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Moment from 'react-moment';
import ModalImage from 'react-modal-image';
import { SimpleShareButtons } from "react-simple-share";

class AstronomyList extends Component {
    state = {
        isModalOpen: false
    };

    componentDidMount(){
        console.log('Initial result', this.props.astronomy);
        this.props.fetchData();
    }

    refreshList(e) {
        e.preventDefault();
        this.props.fetchData();
        console.log('Updated result', this.props.astronomy);
    }
    
    resetList(e) {
        e.preventDefault();
        this.props.resetList();
    }

    renderList(astronomy) {
        return (
            <div className="astronomy-card" key={astronomy.title}>
                <h2 className="astronomy-title">{astronomy.title}</h2>
                <div className="astronomy-image-wrapper">
                    <ModalImage
                        className="astronomy_pic" 
                        small={astronomy.url}
                        large={astronomy.hdurl}
                    >
                        <img 
                            className="astronomy_pic" 
                            src={astronomy.url} 
                            alt={astronomy.title}
                        />
                    </ModalImage>
                </div>
                <p className="explanation">{astronomy.explanation}</p>
                <span>
                    &copy; {astronomy.copyright ? astronomy.copyright : `NASA`}, &nbsp;
                    <Moment format="DD/MM/YYYY">
                        {astronomy.date}
                    </Moment> 
                </span>
                <p className="share">Share this image</p>
                <SimpleShareButtons
                    url={astronomy.url}
                    whitelist={
                        ["Facebook", "Twitter", "Tumblr", "Pinterest", "Reddit"]
                    }
                    size="40px"
                    via="NASA"
                />
            </div>
        )
    }

    render() {
        return (
            <div className="button_container">
                {this.props.astronomy.map(this.renderList)}
                <button 
                    className="update_button"
                    onClick={(e) => {this.refreshList(e)}}
                >
                    Fetch More Photos
                </button>
                <button
                    className="reset_button"
                    onClick={(e) => {this.resetList(e)}}
                >
                    Reset
                </button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, actions)(AstronomyList);

