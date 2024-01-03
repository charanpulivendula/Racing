import React, { Component } from 'react';
import {
  Col,
  Grid,
  Jumbotron,
  Row
} from 'react-bootstrap';

import Basic from './Basic';

export default class BasicExample extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Basic />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
  