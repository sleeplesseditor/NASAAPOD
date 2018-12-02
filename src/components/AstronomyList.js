import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Moment from 'react-moment';
import { SimpleShareButtons } from "react-simple-share";

class AstronomyList extends Component {

    componentDidMount(){
        console.log(this.props.astronomy);
        this.props.fetchData();
    }

    refreshList(e) {
        e.preventDefault();
        this.props.fetchData();
    } 

    renderList(astronomy) {
        return (
            <div className="astronomy-card">
                <h2 className="astronomy-title">{astronomy.title}</h2>
                <img className="astronomy_pic" src={astronomy.url} alt={astronomy.title} />
                <p className="explanation">{astronomy.explanation}</p>
                <span>
                    &copy; {astronomy.copyright ? astronomy.copyright : `NASA`}, &nbsp;
                    <Moment format="DD/MM/YYYY">
                        {astronomy.date}
                    </Moment> 
                </span>
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
            <div>
                {this.props.astronomy.map(this.renderList)}
                <button 
                    className="update_button"
                    onClick={(e) => {this.refreshList(e)}}
                >
                    Fetch More Photos
                </button>
            </div>
        );
    }
}

// const AstronomyCard = (props) => {
//     const { title, url, hdurl, explanation, date, copyright } = props.data;

//     return (
//         <div className="astronomy-card">
//             <h2 className="astronomy-title">{title}</h2>
//             <a href={hdurl} className="astronomy-image-wrapper">
//                 <img src={url} alt={title} />
//             </a>
//             <p>{explanation}</p>
//             <span>
//                 &copy; {{copyright} ? `Unknown` : ``}, &nbsp;
//                 <Moment format="DD/MM/YYYY">
//                     {date}
//                 </Moment> 
//             </span>
//             <SimpleShareButtons
//                 url={url}
//                 whitelist={
//                     ["Facebook", "Twitter", "Tumblr", "Pinterest", "Reddit"]
//                 }
//                 size="40px"
//                 via="NASA"
//             />

//         </div>
//     )
// }

function mapStateToProps(state) {
    return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, actions)(AstronomyList);

