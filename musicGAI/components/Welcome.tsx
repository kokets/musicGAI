import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text } from "react-native";
import { supabase } from "../lib/supabase";
import { Session } from '@supabase/supabase-js'

import { LinearGradient } from "expo-linear-gradient";

type Props = {
  navigation: any;
};

const Welcome: React.FC<Props> = ({ navigation }: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { error, user } = await supabase.auth.user();

      if (error || !user) {
        navigation.navigate('Home');
      } else {
        setAuthenticated(true);
      }
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authenticated) {
        navigation.navigate("Create");
      } else {
        navigation.navigate("Home");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, authenticated]);

  return (
    <LinearGradient colors={["#87CEEB", "#FF0000"]} style={styles.container}>
      <StatusBar backgroundColor="#ADD8E6" barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.text}>musicGAI</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
});

export default Welcome;
