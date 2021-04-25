import { combineReducers } from 'redux';
import token from '../reducers/authReducer';
import Volunteers from '../reducers/VolunteersReducer';
import PartnerForm from '../reducers/PartnerFormReducer';
import Consultations from '../reducers/ConsultationsReducer';
import Event from '../reducers/EventReducer';
import Blog from '../reducers/BlogReducer';
import Team from '../reducers/TeamReducer';
import Partnership from '../reducers/PartnershipReducer';

//delete later
import summit from '../reducers/summitReducer';

const rootReducer = combineReducers({
  token: token,
  summit: summit,
  Volunteers: Volunteers,
  PartnerForm: PartnerForm,
  Consultations: Consultations,
  Event: Event,
  Blog: Blog,
  Team: Team,
  Partnership: Partnership,
});

export default rootReducer;
