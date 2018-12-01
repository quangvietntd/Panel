import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Animated } from 'react-native';
import styles from './Panel.component.style';


export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            expanded: true,
            animation: new Animated.Value()
        };

        this.icons = {
            'up': require('../images/arrow_up.png'),
            'down': require('../images/arrow_down.png')
        }
    }

    toggle() {

        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight;
        let finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();

    }

    setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        let icon = this.icons['down'];
        if (this.state.expanded) {
            icon = this.icons['up'];
        }
        const { container, titleContainer, title, button, buttonImage, body } = styles;
        return (
            <Animated.View style={[container, { height: this.state.animation }]}>
                <View style={titleContainer} onLayout={(event) => this.setMinHeight(event)}>
                    <Text style={title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={button}
                        onPress={() => this.toggle()}
                        underlayColor='#f1f1f1'
                    >
                        <Image
                            style={buttonImage}
                            source={icon}
                        />
                    </TouchableHighlight>
                </View>
                <View style={body} onLayout={(event) => this.setMaxHeight(event)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}
