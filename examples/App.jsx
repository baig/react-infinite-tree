import React, { Component } from 'react';
import Tree from './Tree';

class App extends Component {
    state = {
        data: [
            {
                id: 'fruit',
                name: 'Fruit',
                children: [
                    {
                        id: 'apple',
                        name: 'Apple'
                    },
                    {
                        id: 'banana',
                        name: 'Banana',
                        children: [
                            {
                                id: 'cherry',
                                name: 'Cherry',
                                loadOnDemand: true
                            }
                        ]
                    }
                ]
            }
        ],
    };

    updateData = () => {
        this.setState(prevState => {
            return {
                data: [
                    ...prevState.data,
                    {
                        id: 'person',
                        name: 'Person',
                        children: [
                            {
                                id: 'abc',
                                name: 'Abc'
                            },
                            {
                                id: 'xyz',
                                name: 'Xyz',
                                children: [
                                    {
                                        id: 'mno',
                                        name: 'Mno',
                                        loadOnDemand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
            };
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.updateData}>Click Me</button>
                <Tree data={this.state.data} />
            </div>
        );
    }
}

export default App;
