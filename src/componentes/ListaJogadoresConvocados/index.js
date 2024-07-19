import { View, Image, Text } from "react-native";

// styles
import { styles } from "./styles";

export default function ListaJogadoresConvocados({ imagem_jogador, nome_jogador, imagem_pais_jogador }) {
    
    return (
        <View style={styles.listaJogadoresConvocados}>
            <View>
                <Image source={{ uri: imagem_jogador }} resizeMode='cover' style={styles.imagemJogadoresConvocados} />
                <Image style={styles.escudoPais} source={{ uri: imagem_pais_jogador }} />
            </View>
            <Text style={styles.nomeJogadoresConvocados}>{nome_jogador}</Text>
        </View>
    )
}


