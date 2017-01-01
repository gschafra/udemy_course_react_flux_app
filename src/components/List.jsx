var React = require('react');
var ListItem = require('./ListItem.jsx');
var ListGroup = require('react-bootstrap/lib/ListGroup');

var List = React.createClass({
    render: function() {
        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text} />;
        };
        return (
            <ListGroup>{this.props.items.map(createItem)}</ListGroup>
        );
    },
    getDefaultProps: function() {
        return {
            items: [
                "ham",
                "cheese",
                "pork",
                "unkown"
            ]
        };
    }
});

module.exports = List;
