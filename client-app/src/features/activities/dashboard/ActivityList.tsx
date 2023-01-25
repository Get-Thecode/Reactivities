import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface Props{
    activities : Activity[];
    selectActivty: (id: string) => void;
    deleteActivity :  (id: string) => void;
}

export default function ActivityList({activities, selectActivty, deleteActivity} : Props){
    return (
        <Segment>
            <Item.Group divided>
                    {activities.map(activity => (
                        <Item key= {activity.id}>
                            <Item.Content>
                                <Item.Header as='a'>{activity.tittle}</Item.Header>
                               
                               
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={()=> selectActivty(activity.id)} floated="right" content ="View" color="blue" />
                                    <Button onClick={()=> deleteActivity(activity.id)} floated="right" content ="Delete" color="red" />
                                    <Label basic content = {activity.category} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
            </Item.Group>
        </Segment>
    )
}