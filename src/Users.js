import React from 'react';
import { 
  List, 
  TextField, 
  EmailField,
  ArrayField,
  // ReferenceArrayField,
  // ReferenceField,
  ChipField,
  DateField,
  FunctionField,

// SimpleFormIterator,
SingleFieldList,
  Edit,
  Create, 
  TextInput, 
  LongTextInput,
  // ArrayInput,
  DateInput,
  
  Datagrid, 
  // DisabledInput, 
  SimpleForm,
  Filter, 
  ReferenceInput, 
  SelectInput,
  CheckboxGroupInput,
  // AutocompleteArrayInput,
  ReferenceArrayInput,
  // SelectArrayInput,
  // AutocompleteInput
} from 'react-admin';
// import { TagList } from './Tags';


export const UserList = props => (
    <List filters={<UserFilter />} {...props}
    title="User Management">
    {/* <List {...props}> */}
        <Datagrid rowClick="edit" expand={<UserEdit /> } >
            <TextField source="id" />
            <FunctionField label="Full Name" render={record => `${record.first_name} ${record.last_name}`} />
            <EmailField source="email" />
            {/* <TextField source="profile" /> */}
            <DateField label="Availablity" source="avail_start" />
            <DateField label="Availablity End"source="avail_end" />
            <ArrayField source="tags">
                <SingleFieldList>
                  <ChipField source="name" />
               </SingleFieldList>
            </ArrayField>         
        </Datagrid>
    </List>
);


export const UserEdit = props => (
  <Edit {...props} >
        <SimpleForm>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="email" />
            {/* <TextInput source="username" /> */}
            <LongTextInput source="profile" />
            {/* <TextInput source="password" /> */}
            <DateInput source="avail_start" label="Start date" options={{ format: 'MM/DD/YYYY' }} />
            <DateInput source="avail_end" label="End date" options={{ format: 'MM/DD/YYYY' }} />
            {/* <DateInput source="availability.start_date" label="Start date" options={{ format: 'YYYY-MM-DD' }} />
            <DateInput source="availability.end_date" label="End date" options={{ format: 'DD/MM/YYYY' }} /> */}
            <ReferenceArrayInput label="Tags" source="tag_ids" reference="tags" allowEmpty>
                <CheckboxGroupInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
    
export const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="email" />
        <TextInput source="password" />
      </SimpleForm>
  </Create>
);

export const UserFilter = (props) => (
  <Filter {...props}>
      {/* <TextInput label="Search" source="q" alwaysOn /> */}
      <ReferenceInput label="Tags" source="tag_ids" reference="tags" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

