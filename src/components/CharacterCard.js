import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div>
      <Card body outline color="success">
      <CardBody>
      <CardTitle style={{color : 'Red'}}>Name: {props.name}</CardTitle>
      <CardText>Status: {props.status}</CardText>
      <CardText>Species: {props.species}</CardText>
    </CardBody>
    </Card>
    </div>
  )
}