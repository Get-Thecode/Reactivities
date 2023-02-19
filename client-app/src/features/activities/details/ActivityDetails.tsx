import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponet from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";


export default function ActivityDetails(){

  const {activityStore} = useStore();
  const{selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if(!activity) return <LoadingComponet/>;

    return (
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activity.tittle}</Card.Header>
          <Card.Meta>
            <span>date</span>
          </Card.Meta>
          <Card.Description>
            {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
            <Button onClick={()=> openForm(activity.id)} basic color="blue" content='Edit'/>
            <Button onClick={cancelSelectedActivity} basic color="grey" content='cancel'/>
          </Button.Group>
        </Card.Content>
      </Card>
    )
}