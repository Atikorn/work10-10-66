import react from "react";
import {View,Text} from "react-native";
import globalStyles from "./global-style";

export default function TabAbout({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize: 18}}>เป็นแอพพลิเคชั่นขายสินค้า Apple</Text>
        </View>
    )
}




