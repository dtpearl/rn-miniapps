import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TextClock from "./src/screens/TextClock";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    TextClock: TextClock,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native Miniapps",
      headerStyle: {
        backgroundColor: "#f0f",
        borderBottomWidth: 0,
      },
    },
  }
);

export default createAppContainer(navigator);
