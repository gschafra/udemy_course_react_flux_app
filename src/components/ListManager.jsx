var React = require('react');
var List = require('./List.jsx');
var Panel = require('react-bootstrap/lib/Panel');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var FormControl = require('react-bootstrap/lib/FormControl');
var HelpBlock = require('react-bootstrap/lib/HelpBlock');
var Button = require('react-bootstrap/lib/Button');

var ListManager = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            newItemText: ''
        }
    },
    handleChange(e) {
        this.setState({ newItemText: e.target.value });
    },
    getValidationState() {
        const length = this.state.newItemText.length;
        if (length > 10) return 'success';
        else if (length > 0) return 'warning';
        else if (length == 0) return 'error';
      },
    handleSubmit: function(e) {
        e.preventDefault();
        console.log("submit");
        var currentItems = this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },
    render: function () {
        return (
            <Panel header="{this.props.title}">
                <form
                onSubmit={this.handleSubmit}>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Working example with validation</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.newItemText}
                    placeholder="Enter text"
                    onChange={this.handleChange}
                  />
                  <Button type="submit">
                    Submit
                  </Button>
                  <FormControl.Feedback />
                  <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </form>
                <List items={this.state.items}></List>
            </Panel>
        );
    },
    getDefaultProps: function() {
        return {
            title: "Food list"
        };
    }
});

module.exports = ListManager;
