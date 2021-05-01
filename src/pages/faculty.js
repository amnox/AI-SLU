import React, {Component} from 'react';
import FacultyContent from '../components/facultyContent'
import BigDiv from '../components/bigDiv';
import '../style/aboutUsStyles.css'


class Faculty extends Component {
    render() {
        return (
            <BigDiv>
                <FacultyContent />
            </BigDiv>
        );
    }
}

export default Faculty;