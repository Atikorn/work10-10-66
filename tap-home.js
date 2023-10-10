import react from "react";
import {View,Text,StyleSheet, ScrollView,Button,Image,Alert,TouchableOpacity} from "react-native";
import globalStyles from "./global-style";

export default function TabHome({navigation}){
    return(
        <View style={globalStyles.container}>
            <Image source={require('./Apple.png')} style={styles.imgheader}></Image>
            <ScrollView contentContainerStyle={styles.scrollViewContent}
            style={{alignItem:'center'}} horizontal={false}>
                <Text style={globalStyles.container}>
                <Image source={require('./iphone15promax.png')} style={styles.img}></Image>
                </Text>
                <Text style={styles.textdetail}>iphone 15 promax </Text>
                <Text style={styles.text}>ไทเทเนียม ชิป A17 Pro ปุ่มแอ็คชั่น </Text>
                <Text style={styles.text}>กล้องหลักความละเอียด 48MP </Text>
                <Text style={styles.text}>มาพร้อมการซูมแบบออปติคัล 5 เท่า</Text>
                <Text style={styles.text}>iOS 17 จอภาพ Super Retina XDR</Text>
                <Text style={styles.text}>ระบบกล้องระดับโปร ซูมออปติคัล 5 เท่า</Text>
                <Text style={styles.text}>มาพร้อมกับชิบประมวลผล A17 Pro</Text>
                <Button title="ซื้อให้หน่อย" color="red" onPress={() => Alert.alert('ไทยพาณิช 5754558779')} />
                
            </ScrollView>
        </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        backgroundColor:'white',
    },
    scrollViewContent:{
        margin: 5,
        pudding: 20,
    },
    text:{
        fontSize: 16,
        alignItems:'center',
        justifyContent:'center'
    },
    textdetail:{
        fontSize: 30,
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold'
    },
    img:{
        width:300,
        height:300
    },
    imgheader:{
        width:50,
        height:50,
        alignItems:'left',
        justifyContent:'left'
    }

})