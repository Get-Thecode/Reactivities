import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoadingComponet from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedSidebar from "./ActivityDetailedSideBar";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";


export default observer(function ActivityDetails(){

  const {activityStore} = useStore();
  const{selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams();

  useEffect(() => {
    if(id) loadActivity(id);
  }, [id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponet />;

  if(!activity) return <LoadingComponet/>;

    return (
       <Grid>
          <Grid.Column width={10}>
            <ActivityDetailsHeader activity={activity}/>
            <ActivityDetailsInfo activity={activity} />
            <ActivityDetailsChat />
          </Grid.Column>

          <Grid.Column width={6}>
            <ActivityDetailedSidebar />
          </Grid.Column>
       </Grid>
    )
})