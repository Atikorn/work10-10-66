import react from "react";
import {View,Text} from "react-native";
import globalStyles from "./global-style";

export default function TabUser({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={{fontSize:18}}>นายอธิกร สืบซึ้ง ISM26441N ชั้นปีที่ 3 เลขที่ 4</Text>
        </View>
    )
}
