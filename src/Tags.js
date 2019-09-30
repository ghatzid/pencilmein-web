import React from 'react';
import { 
  List, 
  Datagrid,
  TextField,
  // ReferenceField,
  SimpleForm,
  Edit,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  // LongTextInput,
  Create,
  Filter,
  Responsive,
  SimpleList,
  EditButton } from 'react-admin';

export const TagList = (props) => (
  <List {...props}>
      <Responsive
          small={
              <SimpleList
                  primaryText={record => record.title}
                  secondaryText={record => `${record.views} views`}
                  tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
              />
          }
          medium={
              <Datagrid>
                  <TextField source="id" />
                  <TextField source="name" />
                  {/* <ReferenceField label="User" source="userId" reference="users">
                      <TextField source="first_name" />
                  </ReferenceField> */}
                  <EditButton />
              </Datagrid>
          }
      />
  </List>
);

// export const TagList = props => (
//   <List filters={<TagFilter />} {...props}>
//         <Datagrid rowClick="edit">
//             <ReferenceField source="userId" reference="users">
//                 <TextField source="name" />
//             </ReferenceField>
//             <TextField source="id" />
//             <TextField source="title" />
//             <TextField source="body" />
//         </Datagrid>
//     </List>
// );

// Displays tag title in blue bar of edit page
const TagTitle = ({ record }) => {
  return <span>Tag {record ? `"${record.name}"` : ''}</span>;
};

export const TagEdit = props => (
  <Edit title={<TagTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        {/* <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        <TextInput source="name" />
      </SimpleForm>
  </Edit>
);

export const TagCreate = props => (
  <Create {...props}>
      <SimpleForm>
        {/* <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput> */}
        <TextInput source="name" />
      </SimpleForm>
  </Create>
);

export const TagFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

