

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponet from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {

  const { activityStore } = useStore();
  const {loadActivities, activityRegistry} = activityStore;

  useEffect(() => {
    if(activityRegistry.size <= 1) loadActivities();
  }, [activityStore, activityRegistry.size]);

  if (activityStore.loadingInitial)
    return <LoadingComponet content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList/>
      </Grid.Column>
      <GridColumn width="6">
        <h2>Activity filters</h2>
      </GridColumn>
    </Grid>
  )
})
