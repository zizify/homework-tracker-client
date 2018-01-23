import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import HeaderNav from './header-nav';
import StudentDashboard from './students/student-dashboard';


export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

    newButtonClick = e => {
    }
  render() {
    if (!this.props) {
      console.log('InLoadingMode Dashboard', this.props)
      return <h1>Loading....</h1>;
    }
    return (
      <div className="dashboard">
        <HeaderNav />
        <StudentDashboard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
