import React, { Component } from "react"
import { connect } from "react-redux"

import {
    Button,
    Grid,
    Segment,
    Input,
    Form,
    Header,
    Container,
    Message
} from "semantic-ui-react"

import EditProfile from "./editProfileComponent.js"
import Profile from "./profileComponent.js"

class ProfilePage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {}
    componentWillReceiveProps(nextProps) {}

    render() {
        return (
            <Grid container columns="equal" stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Header attached="top" size="large" textAlign="center">
                            <Header.Content>
                                edit profile
                            </Header.Content>
                        </Header>
                        <Segment attached>
                            <EditProfile />
                        </Segment>
                    </Grid.Column>

                    <Grid.Column />

                </Grid.Row>

                <Grid.Row>

                    <Grid.Column>
                        <Header attached="top" size="large" textAlign="center">
                            profile
                        </Header>
                        <Segment attached>
                            <Profile />
                        </Segment>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        undefined: undefined
    }
}

export default connect(mapStateToProps)(ProfilePage)
