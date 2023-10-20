import SignIn_Login from "./Sections/SignIn_Login";
import Know_Me from "./Sections/Know_Me";
import Location from "./Sections/Location";
import Supplier from "./Sections/Supplier";
import Receiver from "./Sections/Receiver";
import Profile from "./Sections/Profile";

const App = () => {
  return (
    <>
      <SignIn_Login />
      <Know_Me />
      <Location />
      <Profile/>
    </>
  );
};

export default App;