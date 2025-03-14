import React, { Children } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/yashwith26");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + " Child Component Did Mount");
  }

  componentDidUpdate() {
    // console.log("Component did Update");
  }

  componentWillUnmount() {
    // console.log("Component will Unmount");
  }

  render() {
    // console.log(this.props.name + " Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <img src={avatar_url} /> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: yashwithsalian1999@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
