import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './Panel.component.style';


export default class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            expanded: true
        };

        this.icons = {
            'up': require('../images/arrow_up.png'),
            'down': require('../images/arrow_down.png')
        }
    }

    toggle() {

    }

    render() {
        let icon = this.icons['down'];
        if (this.state.expanded) {
            icon = this.icons['up'];
        }
        const { container, titleContainer, title, button, buttonImage, body } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
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
                <View style={body}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
