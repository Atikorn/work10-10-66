import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import TabHome from './tap-home';
import TabProduct from './tap-product';
import TabMenu from './tap-menu';
import TabUser from './tab-user';
import TabAbout from './tap-about';

export default function App() {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={{
            labelStyle: {fontSize: 18},//ขนาดตัวอักษร(บนปุ่ม)
            showLabel: true,//เเสดงข้อความหรือไม่เเสดงข้อความ
            inactiveTintColor: 'blue',//สีข้อความเเละไอคอนในสถานะปกติ
            activeTintColor: 'red',//สีข้อความเเละไอคอนในสถานะที่เลือกอยู่
          }}>
            <Tab.Screen name="Apple Store" component={TabHome} options={{
              tabBarLabel:'หน้าเเรก', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="md-home"size={30} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabProduct" component={TabProduct} options={{
              tabBarLabel:'สินค้า', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="cart"size={30} color={color}/>
              }
            }}/>
            <Tab.Screen name="TabUser" component={TabUser} options={{
              tabBarLabel:'ผู้ใช้', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Entypo name="user" size={24} color={color}/> //ไอคอน userของคนอื่น
              }
            }}/>
            <Tab.Screen name="TabAbout" component={TabAbout} options={{
              tabBarLabel:'เกี่ยวกับฉัน', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <AntDesign name="exclamationcircle" size={24} color={color} /> //ไอคอน userของคนอื่น
              }
            }}/>
            <Tab.Screen name="TabMenu" component={TabMenu} options={{
              tabBarLabel:'เมนู', //ข้อความบนปุ่ม
              tabBarIcon: ({color,size}) => {
                return <Ionicons name="menu"size={30} color={color}/>
              }
            }}/>
          </Tab.Navigator>
        </NavigationContainer>
  )
}

