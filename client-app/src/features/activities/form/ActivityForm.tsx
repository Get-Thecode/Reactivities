import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponet from '../../../app/layout/LoadingComponents';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import {v4 as uuid} from 'uuid';


export default observer(function ActivityForm() {

    const {activityStore} = useStore();
    const {selectedActivity, createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        tittle: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]); 

    function handleSubmit(){
        if(!activity.id){
            activity.id == uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }else{
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
      activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    if(loadingInitial) return <LoadingComponet content= 'Loading activity...' />

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
                <Button as={Link} to='/activities' floated='right'  type='button' content='cancel'/>

            </Form>
        </Segment>
    )
})