<template>
  <div class="table-container">
    <!-- <b-button variant="success" @click="handleAddEditableTable()">Add</b-button> -->
    <b-editable-table
      :disableDefaultEdit="false"
      :rowUpdate="tableVM.rowUpdate"
      :editMode="'row'"
      bordered
      class="editable-table"
      v-model="tableVM.items"
      :fields="tableVM.fields"
    >
      <template #cell(isActive)="data">
        <span v-if="data.value">Yes</span>
        <span v-else>No</span>
      </template>
      <template #cell(edit)="data">
        <div v-if="data.isEdit">
          <BIconX class="edit-icon" @click="handleSubmitEditableTable(data, false)"></BIconX>
          <BIconCheck
            class="edit-icon"
            @click="handleSubmitEditableTable(data, true)"
          ></BIconCheck>
        </div>
        <BIconPencil
          v-else
          class="edit-icon"
          @click="handleEditEditableTable(data, true)"
        ></BIconPencil>
      </template>
      <template #cell(delete)="data">
        <BIconTrash
          class="remove-icon"
          @click="handleDeleteEditableTable(data)"
        ></BIconTrash>
      </template>
    </b-editable-table>
  </div>
</template>

<script>
import BEditableTable from "bootstrap-vue-editable-table";
import { editableTableVM } from "./EditableTableVM";
import {
  BIconTrash,
  BIconPencil,
  BIconX,
  BIconCheck,
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BEditableTable,
    BIconX,
    BIconTrash,
    BIconPencil,
    BIconCheck,
    BButton,
  },
  props:{
      tableVM: {
          type: Object,
          default: editableTableVM
      }
  },
  methods: {
    handleAddEditableTable() {
        const payload = { ...context.tableVM }
        this.$emit("handleAddEditableTable", payload);
    },
    handleSubmitEditableTable(data, update) {
        const payload = { update, data, tableVM: context.tableVM }
        this.$emit("handleSubmitEditableTable", payload);
    },
    handleEditEditableTable(data) {
        const payload = { data, tableVM: context.tableVM }
        this.$emit("handleEditEditableTable", payload);
    },
    handleDeleteEditableTable(data) {
        const payload = { data, tableVM: context.tableVM }
        this.$emit("handleDeleteEditableTable", payload);
    },
  
  },
};
</script>

<style>
.table-container {
  margin: 10px;
}

table.editable-table {
  margin-top: 10px;
}

table.editable-table td {
  vertical-align: middle;
}

.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.remove-icon {
  color: red;
  cursor: pointer;
  font-size: 20px;
}

.edit-icon {
  color: rgb(4, 83, 158);
  cursor: pointer;
  font-size: 20px;
}

.name-col {
  width: 120px;
}

.department-col {
  width: 150px;
}

.age-col {
  width: 100px;
}

.date-col {
  width: 200px;
}

.is-active-col {
  width: 100px;
}
</style>