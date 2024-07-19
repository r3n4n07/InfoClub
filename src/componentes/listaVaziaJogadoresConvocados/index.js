import { View, Text } from "react-native";

// styles
import { styles } from "./styles";

export default function ListaVaziaJogadoresConvocados() {
    return (
        <View style={styles.containerSemConvocacao}>
            <Text style={styles.semConvocacao}>Nenhum atleta foi convocado</Text>
        </View>
    )
}

