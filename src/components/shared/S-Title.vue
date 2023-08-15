<template>
    <div class="row text-left">
        <div v-if="title.src">
            <q-avatar>
                <img :src="title.src">
            </q-avatar>
        </div>
  
          <div>
            <span>
                <p>{{ title.name }}</p>
                <p>{{ title.description }}</p>
            </span>
          </div>
          <q-space/>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: Object,
            default: () => {
                return { name: "", description: "", src: ""}
            }
        }
    }
}
</script>