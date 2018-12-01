import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from '../actions/fetch_data';
import AstronomyCard from './AstronomyCard';

class AstronomyContainer extends Component {

    componentDidMount(){
        console.log(this.props.astronomy);
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                <AstronomyCard data={this.props.astronomy} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { astronomy: state.astronomy}
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);