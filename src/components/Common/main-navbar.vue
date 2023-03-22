<template>
    <div class="q-pa-none text-accent">
        <q-toolbar class="bg-primary text-accent">
            <img :src="selectedLogo.fileUrl"
                style="height:50px; width:50px;">
         <q-space />

         <q-tabs v-model="selected_tab" shrink>

        <div v-if="rightDrawerOpen">
          <q-btn
            :icon="rightMenuIcon"
            flat
            dense
            class="text-accent bg-primary">
            <q-menu fit>
              <q-list dense class="text-accent text-caption bg-primary" style="width:200px;">
                <q-item
                v-for="(menuItem) in menuList" :key="menuItem.name" 
                class="bg-primary text-accent"
                clickable
                @click="scrollToElement(menuItem.name)">
                      <q-item-section>
                        {{ menuItem.label}}
                        <q-menu 
                        v-if="isItem3(menuItem.tabIndex)"
                        fit>
                        <q-list 
                        v-for="(item3Row) in item3Groups" :key="item3Row.title" 
                        dense class="text-accent text-caption bg-primary" style="width:200px;">
                                <q-item-label header>{{ item3Row.title }} </q-item-label>
                                <q-item
                                v-for="(example) in item3Row.examples" :key="example.title" 
                                class="bg-primary text-accent"
                                clickable
                                @click="loadSelectedExample(example.title)">
                                    <q-item-section>
                                    {{ example.title}}
                                    </q-item-section>
                                </q-item>
                                <q-separator spaced />
                        </q-list>
                        </q-menu>
                        <q-menu 
                        v-if="isProducts(menuItem.tabIndex)"
                        fit>
                        <q-list 
                        v-for="(productItem) in productGroups" :key="productItem.title" 
                        dense class="text-accent text-caption bg-primary" style="width:200px;">
                                <q-item-label header>{{ productItem.title }} </q-item-label>
                                <q-item
                                v-for="(product) in productItem.products" :key="product.title" 
                                class="bg-primary text-accent"
                                clickable
                                @click="showProduct(product.name)">
                                    <q-item-section>
                                    {{ product.title}}
                                    </q-item-section>
                                </q-item>
                                <q-separator spaced />
                        </q-list>
                        </q-menu>
                        <q-menu 
                        v-if="isServices(menuItem.tabIndex)"
                        fit>
                        <q-list 
                        v-for="(serviceItem) in serviceGroups" :key="serviceItem.title" 
                        dense class="text-accent text-caption bg-primary" style="width:200px;">
                                <q-item-label header>{{ serviceItem.title }} </q-item-label>
                                <q-item
                                v-for="(service) in serviceItem.services" :key="service.title" 
                                class="bg-primary text-accent"
                                clickable
                                @click="showProduct(service.name)">
                                    <q-item-section>
                                    {{ service.title}}
                                    </q-item-section>
                                </q-item>
                                <q-separator spaced />
                        </q-list>
                        </q-menu>
                      </q-item-section>
                  </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-tab 
        v-else
         v-for="(menuItem) in menuList" :key="menuItem.name"
        class="q-mr-sm q-py-xs text-accent" 
        :label="menuItem.label"
        no-caps
        @click="scrollToElement(menuItem.name)">
            <q-menu 
                v-if="isItem3(menuItem.tabIndex)"
                fit>
                <q-list 
                v-for="(item3Row) in item3Groups" :key="item3Row.title" 
                dense class="text-accent text-caption bg-primary" style="width:200px;">
                        <q-item-label header>{{ item3Row.title }} </q-item-label>
                        <q-item
                        v-for="(example) in item3Row.examples" :key="example.title" 
                        class="bg-primary text-accent"
                        clickable
                        @click="loadSelectedExample(example.title)">
                            <q-item-section>
                            {{ example.title}}
                            </q-item-section>
                        </q-item>
                        <q-separator spaced />
                </q-list>
            </q-menu>
            <q-menu 
            v-if="isProducts(menuItem.tabIndex)"
            fit>
              <q-list 
              v-for="(productItem) in productGroups" :key="productItem.title" 
              dense class="text-accent text-caption bg-primary" style="width:200px;">
                    <q-item-label header>{{ productItem.title }} </q-item-label>
                    <q-item
                    v-for="(product) in productItem.products" :key="product.title" 
                    class="bg-primary text-accent"
                    clickable
                    @click="showProduct(product)">
                        <q-item-section>
                        {{ product.title}}
                        </q-item-section>
                    </q-item>
                    <q-separator spaced />
              </q-list>
            </q-menu>
            <q-menu 
            v-if="isServices(menuItem.tabIndex)"
            fit>
              <q-list 
              v-for="(serviceItem) in serviceGroups" :key="serviceItem.title" 
              dense class="text-accent text-caption bg-primary" style="width:200px;">
                    <q-item-label header>{{ serviceItem.title }} </q-item-label>
                    <q-item
                    v-for="(service) in serviceItem.services" :key="service.title" 
                    class="bg-primary text-accent"
                    clickable
                    @click="showProduct(service.name)">
                        <q-item-section>
                        {{ service.title}}
                        </q-item-section>
                    </q-item>
                    <q-separator spaced />
              </q-list>
            </q-menu>
        </q-tab>
       </q-tabs>
        
      </q-toolbar>
    </div>
</template>

<script>
import IconLabel from "./icon-label.vue";
export default {
    computed:{
        menuList(){
            return this.$store.getters['authenticationStore/menuList'];
        },
        selectedLogo(){
            return this.$store.getters['LogoStore/selectedLogo'];
        }
    },
    components:{
        IconLabel
    },
    props:{
        productGroups:{
            type: Array,
            default: () => {
                return [
                    {
                        title: "Apps",
                        products: [
                        {
                            title: "Torpa",
                            name: "/product/torpa",
                        },
                        {
                            title: "Launchpad",
                            name: "/product/launchpad",
                        },
                        {
                            title: "Interiors",
                            name: "/product/interiors",
                        },
                        {
                            title: "Foods",
                            name: "/product/foods",
                        }
                        ]
                    },
                    {
                        title: "Interiors",
                        products: [
                        {
                            title: "Bedsheets"
                        },
                        {
                            title: "Doveut"
                        },
                        {
                            title: "Throw Pillows"
                        },
                        {
                            title: "Curtains"
                        }
                        ]
                    },
                ]
            }
        },
        serviceGroups:{
            type: Array,
            default: () => {
                return [
                {
                    title: "Technology",
                    services: [
                            {
                                title: "Mobile App Development",
                                name: "",
                            },
                            {
                                title: "Web App Development",
                                name: "",
                            },
                            {
                                title: "Desktop App Development",
                                name: "",
                            },
                            {
                                title: "Big Data Analysis",
                                name: "",
                            },
                            {
                                title: "Crytography",
                                name: "",
                            },
                            {
                                title: "Machine Learning",
                                name: "",
                            }
                        ]
                    },
                    {
                        title: "Interior Decorations",
                        services: [
                            {
                                title: "House Decorations"
                            },
                            {
                                title: "Event Decoration"
                            },
                        ]
                    },
                ]
            }
        },
        item3Groups:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data(){
        return {
            rightDrawerOpen: window.innerWidth < 700 ? true : false,
            selected_tab: 'home',
            rightMenuIcon: "menu",
        }
    },
    methods:{
        scrollToElement(routename){
            var context = this;
            context.selected_tab =  routename;
            switch(routename){
                case "/":
                    this.$router.push(`${routename}`);
                    break;
            }
            
            var isSchoolRoute = this.$router.history.current.fullPath=='/school-landing';
            console.log("isSchoolRoute: ", isSchoolRoute);
            this.$store.commit("authenticationStore/setIsSchoolRoute", isSchoolRoute)
        },
        isItem3(tabIndex){
            const ans = tabIndex === "item3" ? true : false;
            return ans;
        },
        isProducts(tabIndex){
            const ans = tabIndex === "products" ? true : false;
            return ans;
        },
        isServices(tabIndex){
            const ans = tabIndex === "services" ? true : false;
            return ans;

        },
        isItem3(tabIndex){
            const ans = tabIndex === "item3" ? true : false;
            return ans;

        },
        showProduct(product){
            var context = this;
            this.$store.commit("productStore/setAboutUs", product.title)
            this.$store.commit("productStore/setGallery", product.title)
            this.$store.commit("productStore/setPrivacyPolicy", product.title)
            this.$store.commit("productStore/setLogo", product.title)
            this.$store.commit("productStore/setInstall", product.title)
            this.$router.push(`${product.name}`);
        },
        loadSelectedExample(title){
            console.log("title: ", title)
            this.$store.commit("simulationStore/setIsSelectedExample", true)
            this.$store.commit("simulationStore/loadSelectedExample", title)
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
.header-image {
    height:100%;
    z-index:-1;
    opacity: 0.8; 
}
</style>