<template>
    <div v-if="show">
        <v-card height="100%">
            <v-toolbar color="pink" dark>
                <v-toolbar-title>Options {{ drawer }}</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <v-list-group v-for="(item, key) in items" v-bind:key="key" v-model="item.active" :prepend-icon="item.action" no-action>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item 
                        v-for="(subItem, key) in item.items" 
                        v-bind:key="key"
                        v-on="item.action === 'sort' ? { click: () => sort(subItem.by) } : { click:() => filter(subItem.by) }" 
                        active-class>
                        <v-list-item-content>
                            <v-list-item-title>{{subItem.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>

                <v-list-group prepend-icon="filter">
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>List Options</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="displayNotification()">
                        <v-list-item-content>
                            <v-list-item-title class="danger">Remove List</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click.prevent="openDrawer()">
                        <v-list-item-content>
                            <v-list-item-title color="error">Change Background</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>

            </v-list>
        </v-card> 
        <MoreOptions v-if="true"/>
    </div>
</template>


<script>
import MoreOptions from './MoreOptions'

export default {
    name: "optionsBar",
    components: {MoreOptions},
    computed: {
        show(){
           return !!this.$route.params.id
        },
        drawer() {
            return this.$store.getters.DRAWER
        }
    },
    methods: {
        sort(value){
            console.log("Sort by " + value)
        },
        filter(value) {
            console.log("Filter by " + value)
        },
        openDrawer() {
            this.$store.commit("SET_DRAWER", true)
        },
        displayNotification() {
            this.$store.commit("SET_NOTIFICATION", {
                display: true,
                class: 'success',
                timeout: 3600,
                text: "List Removed"
            })
        }
    },
    data: () => ({
        items: [
            {
                action: "sort",
                title: "Sort By",
                active: true,
                items: [
                    {
                        title: 'Date', 
                         by:  'date'
                    },
                    {
                        title: 'Name',
                        by: 'name'
                    }
                ]
            },
             {
                action: "filter_list",
                title: "Filter By",
                active: false,
                items: [
                    {
                        title: 'Remaining', 
                         by:  'remaining'
                    },
                    {
                        title: 'All',
                        by: 'all'
                    }
                ]
            }
        ]
    })
}
</script>
