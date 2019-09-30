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
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <FunctionField label="Full Name" render={record => `${record.first_name} ${record.last_name}`} />
            {/* <TextField source="username" /> */}
            <EmailField source="email" />
            <TextField source="profile" />
            <DateField label="Availablity" source="availability.start_date" />
            <DateField source="availability.end_date" />
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
            <DateInput source="availability.start_date" label="Start date" options={{ format: 'DD/MM/YYYY' }} />
            <DateInput source="availability.end_date" label="End date" options={{ format: 'DD/MM/YYYY' }} />
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
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="Tags" source="userId" reference="tags" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

