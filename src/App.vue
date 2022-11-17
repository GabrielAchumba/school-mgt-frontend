<template>
  <!-- <div id="q-app" @contextmenu.prevent="$refs.menu.open($event, 'Payload')">
    <ContextMenu ref="menu">
      <template slot-scope="{ contextData }">
        <ContextMenuItem @click.native="$refs.menu.close">
          Action 1 {{ contextData }}
        </ContextMenuItem>
         <ContextMenuItem @click.native="$refs.menu.close">
          Action 2 {{ contextData }}
        </ContextMenuItem>
        <ContextMenuItem @click.native="$refs.menu.close">
          Action 3 {{ contextData }}
        </ContextMenuItem>
         <ContextMenuItem @click.native="$refs.menu.close">
          Action 4 {{ contextData }}
        </ContextMenuItem>
      </template>
    </ContextMenu>
    <router-view />
  </div> -->

  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import ContextMenu from "./components/Menus/context-menu.vue";
import ContextMenuItem from "./components/Menus/context-menu-item.vue";
export default {
  name: 'App',
  components:{
    ContextMenu,
    ContextMenuItem,
  }
}
</script>

