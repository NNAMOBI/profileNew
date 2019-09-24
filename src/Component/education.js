import React, { Component } from "react"
import {Grid, Cell } from "react-mdl"


class Eduation extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={6}>
                    <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}<br />{this.props.class}</p>
                    </Cell>

                
</Grid>
        )
    }
}

export default Eduation;