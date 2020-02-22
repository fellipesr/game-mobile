import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing
} from 'react-native';

class ColorButton extends PureComponent {
    state = {
        buttonOpacity: new Animated.Value(1)
    }

    _flash = () => {
        Animated.sequence([
            Animated.timing(this.state.buttonOpacity, {
                toValue: 0.3,
                duration: 150,
                easing: Easing.ease.in
            }),
            Animated.delay(200),
            Animated.timing(this.state.buttonOpacity, {
                toValue: 1,
                duration: 150,
                easing: Easing.ease.out
            })
        ]).start(this.props.onFlashCompleted);
        this.props.onSound()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (
            nextProps.isFlashing !== this.props.isFlashing
            && nextProps.isFlashing
        ) {
            this._flash();
        }
    }

    render() {
        return (
            <TouchableOpacity disabled={this.props.disabled} style={styles.touchable} onPress={this.props.onPress}>
                <Animated.View style={[styles.colorView, {
                    opacity: this.state.buttonOpacity,
                    backgroundColor: this.props.background
                }]}></Animated.View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        width: "50%",
        height: "50%",
        padding: 10
    },
    colorView: {
        borderRadius: 10,
        flex: 1
    }
})

export default ColorButton;