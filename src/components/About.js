import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <h2>You are in about page</h2>

        <UserClass
          name="Yashwith Salian (Class)"
          location="Bengaluru"
          contact="yashwithsalian1999@gmail.com"
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>You are in about page</h2>

//       <UserClass
//         name="Yashwith Salian (Class)"
//         location="Bengaluru"
//         contact="yashwithsalian1999@gmail.com"
//       />
//     </div>
//   );
// };

export default About;
