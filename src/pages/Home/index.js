import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Home() {
    const navegacao = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166718623918854164/home.PNG",
                }}
                style={{ width: 200, height: 200, borderRadius: 8 }}
            />

            <Text>
                Boas vindas ao nosso site sobre as 4 series mais bem
                feitas(nossa opinião) e o endereço do dono da Blaze
            </Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "end",
                    justifyContent: "center",
                    gap: 12,
                }}
            >
                <Pressable
                    style={styles.btn}
                    onPress={() => navegacao.navigate("Fotos")}
                >
                    <Text style={styles.whiteTxt}>Fotos</Text>
                </Pressable>

                <Pressable
                    style={styles.btn}
                    onPress={() => navegacao.navigate("Cadastro")}
                >
                    <Text style={styles.whiteTxt}>Cadastro</Text>
                </Pressable>

                <Pressable
                    style={styles.btn}
                    onPress={() => navegacao.navigate("Localização")}
                >
                    <Text style={styles.whiteTxt}>Localização</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        gap: 32,
    },
    btn: {
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        backgroundColor: "#3b82f6",
    },

    whiteTxt: {
        color: "#f8fafc",
    },
});
