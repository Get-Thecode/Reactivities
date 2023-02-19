import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';


export default observer(function ActivityForm() {

    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        tittle: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(){
      activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete = 'off'>
                <Form.Input placeholder='Title' value={activity.tittle} name="tittle" onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name="description" onChange={handleInputChange}/>
                <Form.Input placeholder='category' value={activity.category} name="category" onChange={handleInputChange}/>
                <Form.Input type='Date' placeholder='Date' value={activity.date} name="date" onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name="city" onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name="venue" onChange={handleInputChange}/>

                <Button loading={loading} floated='right' positive type='submit' content='submit'/>
                <Button onClick={closeForm} floated='right'  type='button' content='cancel'/>

            </Form>
        </Segment>
    )
})