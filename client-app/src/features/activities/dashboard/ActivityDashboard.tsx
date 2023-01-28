import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectedActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          selectActivty={selectActivity}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </Grid.Column>
      <GridColumn width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectedActivity}
            openFrom={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
            submitting = {submitting}
          />
        )}
      </GridColumn>
    </Grid>
  );
}
