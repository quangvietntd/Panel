import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import Panel from './components/Panel.component';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { container } = styles;
        return (
            <ScrollView style={container}>
                <Panel title="A Panel with short content text">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </Panel>
                <Panel title="A Panel with long content text">
                    <Text>Anim consequat pariatur mollit commodo labore sit deserunt amet mollit sit dolor. Cupidatat sit irure cillum qui Lorem proident quis dolor reprehenderit. Ad voluptate commodo ut laborum ad in incididunt anim excepteur.
          
Amet non velit fugiat amet aliqua deserunt. Nisi nulla laboris eiusmod esse deserunt duis est deserunt dolore. Fugiat consequat culpa dolor ad cupidatat id incididunt dolore ea sunt Lorem id exercitation tempor. Officia exercitation in ullamco ullamco et consectetur irure. Culpa labore tempor reprehenderit do fugiat ex voluptate excepteur. Labore officia quis esse velit officia aliqua commodo nulla commodo consequat. Dolore aliquip veniam ex aute eiusmod laboris.</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>
                <Panel title="Another Panel">
                    <Text>Lorem ipsum dolor sit amet...</Text>
                </Panel>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f7f9',
        paddingTop: 30,
    },

});
