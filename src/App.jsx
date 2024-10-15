import SignIn_Login from "./Sections/SignIn_Login";
import Know_Me from "./Sections/Know_Me";
import Location from "./Sections/Location";
import Supplier from "./Sections/Supplier";
import Receiver from "./Sections/Receiver";
import Profile from "./Sections/Profile";
import Homepage from "./Sections/HomePage";
import WasteProductCard from "./Sections/WasteCard";
import UserProfile from "./Sections/UserProfile";

const App = () => {
  return (
    <>
      <SignIn_Login />
      <Know_Me />
      <Location />
      <Profile/>
      <Homepage/>
      <WasteProductCard/>
      <UserProfile/>
    </>
  );
};

export default App;