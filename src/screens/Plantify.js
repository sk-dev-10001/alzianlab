import { useEffect ,useState} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { fetchPlantsList } from '../api/Api'
import { FlatList } from 'react-native-gesture-handler'
import styles from './styles'

const Plantify = ({navigation}) => {
    const [plantList,setPlatList] = useState([]);
    const firstItem = {"bio": "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
        "category": "Air Purifier",
        "fertilizer": "250gm", 
        "id": 1,
        "image": "https://i.postimg.cc/L6vmPsTC/Peperomia-Obtusfolia.png",
            "light": "30-40%", 
            "name": "Pepperomia",
            "price": 400, 
            "size": "4\" h",
            "water": "250ml"
        }


        const fetchPlantsList = async () => {
            try {
                const resp = await fetch('https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',{
                    method:'GET'
                });
                const data = await resp.json();
                // console.log(data)
                setPlatList(data)
            } catch (error) {
                console.log('error:',error)
            }
        
        }


    useEffect(() => {
        fetchPlantsList()
    },[])

    console.log('plantList:',plantList)

    const renderItem = ({item,index}) => {
        console.log('item:',item)
        return(
            <TouchableOpacity onPress={() => navigation.navigate('platifyDetail',{
                item})} style = {styles.mainContainer}>
                <Text style = {styles.categoryStyle}>
                    {item.category}
                </Text>
            </TouchableOpacity>
        )
    }
    return(
        <View>
            <FlatList 
                data={plantList}
                keyExtractor={(item,index) => item.id}
                renderItem={renderItem}
            />
            {/* <Text>hellow platify</Text> */}
        </View>
    )
}

export default Plantify