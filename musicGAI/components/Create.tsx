import React ,{useState,useEffect} from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { supabase } from "../lib/supabase";
type Props = {
  navigation: any;
};
const Create : React.FC<Props> = ({navigation}) => {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getEmail = (text: string ): void => {
    setEmail(text);
  }
  const getPassword = (text: string ): void => {
    setPassword(text);
  }
  
 const createUser = async () => {
 
  try {
    // const { data, error } = await supabase.from("User").insert([userData]);
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: password,
    });
    if (error) {
      console.log("Error creating user:", error);
    } else {
      navigation.navigate('Home')
      console.log("User created successfully:", data);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
async function signInWithFacebook() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      
    })
    if (error) {
      console.log("Error creating user:", error);
    } else {
      navigation.navigate('Home')

      console.log("User created successfully:", data);
    }
  } catch (error) {
    console.log("Error:", error);

  }
}


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainText}>Create Account</Text>
      </View>
      <TextInput
        style={styles.username}
        placeholder="Username"
        placeholderTextColor={"grey"}
        onChangeText={ (e) => getEmail(e)}
        value={Email}
      ></TextInput>
      <TextInput
        style={styles.username}
        placeholder="Password"
        placeholderTextColor={"grey"}
        onChangeText={(e) => getPassword(e)}
        value={password}
      ></TextInput>
      <TouchableOpacity style={styles.button}  onPressIn={() => createUser()}>
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => signInWithFacebook()}>
        <Image style={styles.facebook} source={require("../assets/icons8-facebook-64.png")} />

        </TouchableOpacity>
         <TouchableOpacity>
         <Image style={styles.google}  source={require("../assets/icons8-google-94.png")} />

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    top: 150,
    alignItems: "center",
  },
  mainText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "grey",
  },
  text: {
    fontSize: 28,
    fontWeight: "normal",
    color: "white",
  },
  username: {
    borderWidth: 0.1,
    width: 250,
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    borderColor: "grey",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  button: {
    marginTop: 20,
    width: 230,
    height: 50,
    borderRadius: 5,
    // borderWidth: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#87CEEBr",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  icons: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    width: 200
    // alignItems: 'flex-start'
    // justifyContent: "center",
    // top: 150,
    // alignItems: "h",
  },
  facebook: {
    width:50,
    height: 50,
    paddingLeft: 20

  },
  google: {
    width:50,
    height: 50
  },
});
export default Create;
