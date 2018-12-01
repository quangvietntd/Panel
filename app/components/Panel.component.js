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
        const {expanded, bodyHeight, titleHeight, animation} = this.state;
        const initialValue = expanded ? bodyHeight + titleHeight : titleHeight;
        const finalValue = expanded ? titleHeight : bodyHeight + titleHeight;

        this.setState({
            expanded: !expanded
        });

        animation.setValue(initialValue);
        Animated.spring(
            animation,
            {
                toValue: finalValue
            }
        ).start();

    }

    setTitleHeight(event) {
        this.setState({
            titleHeight: event.nativeEvent.layout.height
        });
    }

    setBodyHeight(event) {
        this.setState({
            bodyHeight: event.nativeEvent.layout.height
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
                <View style={titleContainer} onLayout={(event) => this.setTitleHeight(event)}>
                    <Text style={title}>{this.state.title}</Text>
                    <TouchableHighlight
                        style={button}
                        onPress={() => this.toggle()}
                        underlayColor='#ffffff'
                    >
                        <Image
                            style={buttonImage}
                            source={icon}
                        />
                    </TouchableHighlight>
                </View>
                <View style={body} onLayout={(event) => this.setBodyHeight(event)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}
