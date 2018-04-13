import React from 'react';
import UserIndexItem from '../users/user_index_item';

class UserResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.props;
    return (
      <ul>
          {users.map(user => 
                      <UserIndexItem key={user.id} user={user} renderButton={true} />
          )}
      </ul>
    );
  }
}

export default UserResults;