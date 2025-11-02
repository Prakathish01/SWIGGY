import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count1, count2 } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>{count1}</h3>
      </div>
    );
  }
}
export default UserClass;
