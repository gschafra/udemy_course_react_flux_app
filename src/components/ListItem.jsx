var React = require('react');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var ListItem = React.createClass({
    render: function() {
        return (
            <ListGroupItem>
                <h4>{this.props.text}</h4>
            </ListGroupItem>
        );
    }
})
module.exports = ListItem;
