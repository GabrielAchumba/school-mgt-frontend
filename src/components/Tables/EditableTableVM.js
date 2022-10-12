export const editableTableVM = {
    id: 1,
    visible: false,
    handleAddName: "",
    handleSubmitName: "",
    handleEditName: "",
    handleDeleteName: "",
    fields: [
      { key: "delete", label: "" },
      {
      key: "name",
      label: "Name",
      type: "text",
      editable: true,
      placeholder: "Enter Name...",
      class: "name-col",
      },
      { key: "edit", label: "" },
    ],
    items: [
        {
          id: 1,
          name: "Dickerson",
      },
    ],
    rowUpdate: {},
}