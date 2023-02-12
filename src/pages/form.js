export default {
  id: 1,
  title: "Add User",
  subTitle: "create new user for testing",
  blocks: [
    {
      token: "PERSON_FIRSTNAME",
      type: "text",
      props: {
        title: "Enter first Name",
        required: true,
        placeholder: "e.g John Due",
      },
    },
    {
      token: "PERSON_LASTNAME",
      type: "text",
      props: {
        title: "Enter last Name",
        required: true,
        placeholder: "e.g John Due",
      },
    },
    {
      token: "PERSON_DOB",
      type: "date",
      props: {
        title: "Enter  Date of Birth",
        required: true,
        placeholder: "e.g 01/02/2022",
      },
    },
    {
      token: "IS_PERSON_MINOR",
      type: "checkbox",
      props: {
        title: "Is the current person minor ?",
        default: false,
      },
    },
  ],
};
