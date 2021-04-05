import React, {Component} from 'react';
import JoinUsContent from '../components/joinUsContent'
import BigDiv from '../components/bigDiv';
import '../style/aboutUsStyles.css'


class JoinUs extends Component {
    render() {
        return (
            <BigDiv>
                <JoinUsContent />
            </BigDiv>
        );
    }
}

export default JoinUs;