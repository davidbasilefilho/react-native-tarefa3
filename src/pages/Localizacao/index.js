import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Localizacao() {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>
                Endereço da casa do dono da Blaze: {"\n"}Rua Kaminda Johan M.
                Statius Van Eps, 76
            </Text>
            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166720379209916466/localizacao.PNG?ex=654b8407&is=65390f07&hm=457833b30cdb6b5be7d1767f096a420469d38d58b19c3c026801469c53f6323f&=&width=1140&height=641",
                }}
                style={{
                    width: 200,
                    height: 112,
                    borderRadius: 8,
                }}
            ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "start",
        padding: 24,
        gap: 24,
    },
});
