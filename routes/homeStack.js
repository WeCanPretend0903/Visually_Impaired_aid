import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Tapper from "../Screens/Tapper";
import Home from "../Screens/Home";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Tapper: {
    screen: Tapper,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
