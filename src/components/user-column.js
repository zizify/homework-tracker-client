import React from 'react';
import {connect} from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { fetchStudentData } from '../actions/students';

export class UserColumn extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchStudentData());
  }

    render() {
      if (!this.props.student) {
        return <h1>Loading....</h1>;
      }
        return (
      <div>
        <h1>User Column</h1>
        <img src="https://assets-jpcust.jwpsrv.com/thumbs/3Gz5D0sR-720.jpg"></img>
        <h2>{`Hello ${this.props.username}`}</h2>
        <button>New</button>
        <button>Upcoming</button>
        <button>Grades</button>
        </div>
        )
      }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    student: state.students.data.student,
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    loading: state.students.loading
  };
};
console.log(this.props, 'This.props')
export default connect(mapStateToProps)(UserColumn);
