import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>You are in about page</h2>
      <UserClass
        name="Yashwith Salian (Class)"
        location="Bengaluru"
        contact="yashwithsalian1999@gmail.com"
      />
    </div>
  );
};

export default About;
