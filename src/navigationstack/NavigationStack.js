
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Plantify from '../screens/Plantify'
import PlantifyDetail from '../screens/PlantifyDetail'

const NavigationStackScreenList = () => {
    const stack = createStackNavigator()
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name='platify' component={Plantify}/> 
            <stack.Screen name='platifyDetail' component={PlantifyDetail}/> 
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStackScreenList