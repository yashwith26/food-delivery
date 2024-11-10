import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
      <div className="p-5">
        {/* <h1>About Class Component</h1> */}
        <h1 className="font-bold text-lg mb-5">You are in about page</h1>
        <div>
          {/* LoggedIn User */}
          {/* <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer> */}
        </div>

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
