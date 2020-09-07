import { StyleSheet } from 'react-native';
     const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            padding:20,
            width:"100%",
            /*fontFamily:"futuraMd"*/
        },
        containerNopadding: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            padding:0,
            width:"100%",
            /*fontFamily:"futuraMd"*/
        },
        logo_home:{
            width:"100%",
        },
        sub_container:{
            width:"100%",
            /*fontFamily:"futuraMd"*/
        },
        slogan:{
            fontSize:25,
            textAlign:"center",
            paddingTop:20,
            /*fontFamily:"futuraMd"*/
        },
        img_nb_lecteur:{
            width:"100%"
        },
        paddingBottom:{
            paddingBottom:20,
        },
        paddingBottom10:{
            paddingBottom:10,
        },
        paddingBottom20:{
            paddingBottom:20,
        },
        row:{
            flex: 1,
            flexDirection: 'row'
        },
        w_50:{
            width:"50%"
        },
        img:{
            width:"100%"
        },
        img_home:{
            height:200,
            alignItems: 'center',
        },
        paddingLeft_20:{
            paddingLeft:20
        },
        paddingRight_20:{
            paddingRight:20
        },
        paddingRight_10:{
            paddingRight:10
        },
        paddingLeft_10:{
            paddingLeft:10
        },
        back_pink:{
            backgroundColor:"#E40EAB"
        },
        back_grey:{
            backgroundColor:"#f0f0f0"
        },
        menu_title:{
            fontSize:20,
            color:"white",
            textTransform:"uppercase",
            /*fontFamily:"futuraMd"*/
        },
        textCenter:{
            textAlign:"center",
        },
        alignCenter:{
            alignItems: 'center',
        },
        paddingTop:{
            paddingTop:20
        },
        title_info:{
            fontSize:20,
            color:"#E80EAE",
            textTransform:"uppercase",
            /*fontFamily:"futuraMd"*/
        },
        subtitle_info:{
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        bouton_vert: {
            width: "100%",
            backgroundColor: "#008000",
            borderRadius: 0,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop:10,
            marginBottom: 10,
            /*fontFamily:"futuraMd"*/
        },
        bouton_red: {
            width: "100%",
            backgroundColor: "red",
            borderRadius: 0,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop:10,
            marginBottom: 10,
            /*fontFamily:"futuraMd"*/
        },
        bouton_rose_contact: {
            width: "80%",
            backgroundColor: "#DC1A95",
            borderRadius: 0,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop:10,
            marginBottom: 10,
            /*fontFamily:"futuraMd"*/
        },
        bouton_rose_back: {
            width: "100%",
            backgroundColor: "#DC1A95",
            borderRadius: 0,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop:10,
            marginBottom: 10,
            /*fontFamily:"futuraMd"*/
        },
        paddingTop_10:{
            paddingTop:10,
        },
        text_bouton:{
            color:"white",
            fontSize:15,
            /*fontFamily:"futuraMd"*/
        },
        icon_home:{
            margin:5
        },
        footer_adress:{
            fontSize:20,
            paddingTop:20,
            /*fontFamily:"futuraMd"*/
        },
        contact_footer:{
            
        },
        contact_bg:{
            flex: 1,
            resizeMode: "cover",
            alignItems: 'center',
            width:"100%",
            paddingBottom:20,
            paddingTop:20
        },
        inputView: {
            width: "80%",
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 0,
            height: 50,
            marginBottom: 10,
            justifyContent: "center",
            padding: 20
        },
        inputViewText: {
            width: "80%",
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 0,
            height: 100,
            marginBottom: 10,
            justifyContent: "center",
            padding: 20
        },
        inputText: {
            height: 50,
            color: "black",
            /*fontFamily:"futuraMd"*/
        },
        inputTextArea: {
            height: 200,
            color: "black",
            /*fontFamily:"futuraMd"*/
        },
        Pabsolute:{
            position:"absolute",
            bottom:0,
            paddingTop:10,
            height:50,
        },
        categ_bg:{
            backgroundColor: "black",
            opacity:0.6,
        },
        title_rubrique:{
            fontSize:20,
            /*fontFamily:"futuraMd"*/
        },
        border_solid:{
            borderWidth:1,
        },
        padding_5:{
            padding:5,
        },
        padding_10:{
            padding:10,
        },
        padding_15:{
            padding:15,
        },
        txt_underline:{
            textDecorationLine:"underline"
        },
        bold:{
            fontWeight:"700",
        },
        marginTop_10:{
            marginTop:10
        },
        slideImgAnnonce:{
            width:"90%",
            height:300,
        },
        colorBlack:{
            color:"black",
        },
        txt_fidelity1:{
            color:"#3653a2",
            fontSize:20,
            textAlign:"center",
            /*fontFamily:"futuraMd"*/
        },
        txt_fidelity2:{
            fontSize:18,
            textAlign:"center",
            /*fontFamily:"futuraMd"*/
        },
        btnHomeMenu:{
            opacity:1,
            width:50,
            height:50,
            position:"absolute",
            left:10,
            top:"15%",
        },
        btnBack:{
            textAlign:"center",
            width:"100%",
            alignItems: "center",
            paddingBottom:20,
            /*fontFamily:"futuraMd"*/
        },
        btnBackTxt:{
            backgroundColor:"#DC1A95",
            width:"30%",
            padding:10,
            color:"white",
            margin:"auto",
            textAlign:"center",
            /*fontFamily:"futuraMd"*/
        },
        btnLogoutAllTxt:{
            backgroundColor:"red",
            width:"50%",
            padding:10,
            color:"white",
            marginTop:20,
            textAlign:"center",
            /*fontFamily:"futuraMd"*/
        },
        btnLoginAllTxt:{
            backgroundColor:"green",
            width:"50%",
            padding:10,
            color:"white",
            marginTop:20,
            textAlign:"center",
            /*fontFamily:"futuraMd"*/
        },
        btnAccountMenu:{
            opacity:1,
            width:50,
            height:50,
            position:"absolute",
            left:"20%",
            top:"15%",
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          },
          modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            width:"90%"
          },
          openButton: {
            backgroundColor: "#F194FF",
            borderRadius: 20,
            padding: 10,
            elevation: 2
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          },
          labelInput:{
            paddingBottom:10,
            color:"black",
            /*fontFamily:"futuraMd"*/
          },
          w_80:{
              width:"80%"
          },
          blockLoggedin:{
              width:"90%",
              borderWidth:1
          },
          usernames:{
            fontSize:20,
            color:"black",
            /*fontFamily:"futuraMd"*/
          },
          warning:{
              color:"red",
              /*fontFamily:"futuraMd"*/
          },
          headerHeight:{
              height:265
          },
          btnMaCarteMenu:{
            opacity:1,
            width:50,
            height:50,
            position:"absolute",
            left:"37%",
            top:"15%",
          },
          btnfavorisMenu:{
            opacity:1,
            width:50,
            height:50,
            position:"absolute",
            left:"53%",
            top:"15%",
          },
          qr_image:{
            height:400,
            borderWidth:5,
            borderColor:"#DC1A95"
          },
          btnContactMenu:{
            opacity:1,
            width:50,
            height:50,
            position:"absolute",
            left:"70%",
            top:"15%",
          },
          margin_0_15:{
              marginTop:0,
              marginBottom:15
          },
          borderRadius_5:{
              borderRadius:5
          },
          borderRadius_img_top_5:{
            borderTopLeftRadius:5,
            borderTopRightRadius:5
          },
          paddingmargin_0:{
              padding:0,
              margin:0
          },
          marginTop_50:{
            marginTop:50
          },
          marginTop_40:{
            marginTop:40
          },
          marginTop_30:{
            marginTop:30
          }

 });
export {styles}