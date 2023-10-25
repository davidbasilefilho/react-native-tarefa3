import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Fotos() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166718622408904764/foto1.PNG?ex=654b8264&is=65390d64&hm=ea996ebcd44c1f2fd6cc4ba579bb1123594601d30b13c9bbf196abb3ea4f504e&=&width=1140&height=641",
                }}
                style={{
                    width: 200,
                    height: 112,
                    borderRadius: 8,
                }}
            />

            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166718622790602814/foto2.PNG?ex=654b8264&is=65390d64&hm=0d3874a1faec6a85e31a0f49220e8a1c1d47a0a386b8f683b32de951d0405766&=",
                }}
                style={{
                    width: 200,
                    height: 112,
                    borderRadius: 8,
                }}
            />

            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166718623126130739/foto3.PNG?ex=654b8264&is=65390d64&hm=2700b5aa36f0a973447674a8cc8e8f4a4315dd1ab071fe1b29967b8a42257fe6&=&width=433&height=641",
                }}
                style={{
                    width: 135,
                    height: 200,
                    borderRadius: 8,
                }}
            />

            <Image
                source={{
                    uri: "https://media.discordapp.net/attachments/1145874408389480599/1166718623482663064/foto4.PNG?ex=654b8264&is=65390d64&hm=de2251ea1ca69559f146edfd33eff94e7b8a27bb52b0d22e6c5d95945f920b7c&=",
                }}
                style={{
                    width: 200,
                    height: 112,
                    borderRadius: 8,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        gap: 24,
    },
});
