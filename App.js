
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './screens/login';
import dashboard from './screens/dashboard';
import subadd from './screens/subadd';
import muldiv from './screens/muldiv';
import registration from './screens/registration'


const mainNavigator=createStackNavigator({
  Login:{screen:login},
  registration:{screen:registration},
  dashboard:{screen:dashboard},
  subadd:{screen:subadd},
  muldiv:{screen:muldiv}
},
{
  defaultNavigationOptions:{
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#BA2F16"
    },
    headerTitleStyle:{
      color:"#fff"
    }
  }
}
)




const App =createAppContainer(mainNavigator);
export default App

