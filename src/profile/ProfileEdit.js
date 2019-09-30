import React from 'react';
import { 

  Edit,

  TextInput, 
  LongTextInput,

  DateInput,
  

  SimpleForm,

  CheckboxGroupInput,

  ReferenceArrayInput,

} from 'react-admin';
// import { TagList } from './Tags';


export const ProfileEdit = ({ staticContext, ...props }) => (

  <Edit
  /*
      As we are not coming for a route generated by a Resource component,
      we have to provide the id ourselves.
      As there is only one config for the current user, we decided to
      hardcode it here
  */
  id={localStorage.getItem('profile')}
  /*
      For the same reason, we need to provide the resource and basePath props
      which are required by the Edit component
  */
  resource="profile"
  basePath="/my-profile"
  redirect={false}
  title="My profile"
  {...props}
>
        <SimpleForm>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            {/* <TextInput source="username" /> */}
            <LongTextInput source="profile" />
            {/* <TextInput source="password" /> */}
            <DateInput source="avail_start" label="Start date" options={{ format: 'MM/DD/YYYY' }} />
            <DateInput source="avail_end" label="End date" options={{ format: 'MM/DD/YYYY' }} />
            <ReferenceArrayInput label="Tags" source="tag_ids" reference="tags" allowEmpty>
                <CheckboxGroupInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
    


export default ProfileEdit;