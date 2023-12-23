import {View,Text} from 'react-native'
import styles from './styles'

const PlantifyDetail = ({route}) => {
    const detail = route.params.item
    console.log('detail:',detail)


    return(
        <View>
            <Text style = {styles.bioStyle}>{detail.bio}</Text>
        </View>
    )
}

export default PlantifyDetail