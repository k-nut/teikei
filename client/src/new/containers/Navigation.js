import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Navigation from '../components/navigation/Navigation'
import { signOut, editAccount } from '../actions/user'
import { showMyEntries, beginAddDepot, beginAddFarm } from '../actions/entry'


const mapStateToProps = ({ user }) => {
  return ({
    loggedIn: user.loggedIn,
    username: user.loggedIn ? user.currentUser.name : '',
  })
}


const mapDispatchToProps = dispatch => ({
  onSignInClick: () => browserHistory.push('/new/users/sign_in'),
  onSignOutClick: () => dispatch(signOut()),
  onEditClick: () => dispatch(editAccount()),
  onMyEntriesClick: () => dispatch(showMyEntries()),
  onAddDepotClick: () => dispatch(beginAddDepot()),
  onAddFarmClick: () => dispatch(beginAddFarm()),
})

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation)

export default NavigationContainer
