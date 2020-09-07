import { StyleSheet } from 'react-native';
import { ceil } from 'react-native-reanimated';
     const filstreStyle = StyleSheet.create({
        row:{
            flex: 1,
            flexDirection: 'row'
        },
        w_50:{
            width:"50%"
        },
        w_100:{
            width:"100%"
        },
        sub_container:{
            width:"100%"
        },
        img:{
            width:"100%"
        },
        bordered_rose:{
            borderColor:"#E40EAB",
            borderWidth:2,
        },
        padding_5:{
            padding:5
        },
        selectText:{
            color:"#E40EAB",
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        selectTextWhite:{
            color:"black",
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        heighted:{
            height:50,
        },
        date_text:{
            paddingTop:12,
            color:"#E40EAB",
            paddingLeft:10,
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        inputText:{
            color:"#E40EAB",
            fontSize:15,
            paddingLeft:10,
            /*fontFamily:"futuraMd"*/
        },
        btn_pink:{
            alignItems:"center",
            paddingTop:12,
            /*fontFamily:"futuraMd"*/
        },
        bg_pink:{
            backgroundColor:"#E40EAB"
        },
        btn_text:{
            color: "white",
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        txt_date:{
            textAlign:"center",
            fontSize:15,
            paddingTop:10,
            color:"#E40EAB",
            /*fontFamily:"futuraMd"*/
        }
 });
export {filstreStyle}