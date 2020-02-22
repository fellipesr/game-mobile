import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class GameOver extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 48, color: "#fff" }}>Game Over</Text>
                <Text style={{ fontSize: 36, color: "#fff" }}>{`Ponto Final: ${this.props.score}`}</Text>
                <TouchableOpacity onPress={this.props.onRetry} style={styles.button}>
                    <Text style={styles.buttonText}>Recomeçar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingBottom: "25%"
    },
    button: {
        height: 42,
        width: '100%',
        maxWidth: 120,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default GameOver;

