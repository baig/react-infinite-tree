import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import InfiniteTree from '../src';

class Tree extends PureComponent {
    static propTypes = {
        data: PropTypes.array,
    };

    render() {
        return (
            <InfiniteTree
                autoOpen
                // ref={node => this.tree = (node ? node.tree : null)}
                height={500}
                rowHeight={30}
                width="100%"
                data={this.props.data}
            >
                {({ node, tree }) => {
                    // tree.openNode(node);
                    return (
                        <div>
                            {node.name}
                        </div>
                    );
                }}
            </InfiniteTree>
        );
    }
}

export default Tree;
