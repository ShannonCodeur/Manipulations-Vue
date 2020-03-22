<template>
    <v-navigation-drawer permanent style="width: 100%; overflow: hidden">
        <v-toolbar color="blue" dark>
            <v-toolbar-title v-if="!DISPLAY_SEARCH_LIST">Your Lists</v-toolbar-title>
            <SearchBar v-if="DISPLAY_SEARCH_LIST"/>
            <v-spacer></v-spacer>
            <v-btn icon @click.prevent="toogleSearchList()">  
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        <v-list> 
           <v-list-item color="blue" @click.prevent="openNewListForm()" v-if="!isOpen">
                <v-list-item-content>
                    <v-list-item-title>
                        Create a New List
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>add</v-icon>
                    </v-list-item-title>
                </v-list-item-action>
           </v-list-item>
           <v-list-item v-if="openNewListFormValue">
               <NewList />
           </v-list-item>
        </v-list> 
        <v-divider></v-divider>
        <v-list style="height: calc(100% - 18px);">
            <v-list-item 
            :to="{ name: 'tasks', params: {id: list.id} }" 
            v-for="(list, key) in lists" 
            v-bind:key="key">
                <v-list-item-content>
                    <v-list-item-title>{{ list.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-list-item-title>{{ list.tasks }}</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import SearchBar from './SearchBar'
import NewList from './NewList'
import {mapGetters} from 'vuex'
export default {
    name: "Lists",
    components: { SearchBar, NewList },
    data: () => ({
        lists: [
            {
                id: 1,
                title: "List",
                tasks: 12

            },
            {
                id: 2,
                title: "Drunk",
                tasks: 45

            },
            {
                id: 3,
                title: "Swim",
                tasks: 82

            },
            {
                id: 4,
                title: "Talking",
                tasks: 31

            },
             {
                id: 5,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 6,
                title: "Talking",
                tasks: 31

            },
             {
                id: 7,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 8,
                title: "Talking",
                tasks: 31

            },
             {
                id: 9,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 10,
                title: "Talking",
                tasks: 31

            },
             {
                id: 11,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 12,
                title: "Talking",
                tasks: 31

            },
             {
                id: 13,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 14,
                title: "Talking",
                tasks: 31

            },
             {
                id: 15,
                title: "List of Tasks",
                tasks: 82

            },
            {
                id: 16,
                title: "Talking",
                tasks: 31

            },
            {
                id: 17,
                title: "Coding",
                tasks: 32

            },
             {
                id: 18,
                title: "Learning",
                tasks: 81

            },
            {
                id: 19,
                title: "Walking",
                tasks: 36

            },
        ]
    }),
    computed: {
        ...mapGetters(['DISPLAY_SEARCH_LIST']),
        openNewListFormValue: {
            get() {
                return this.$store.getters.NEW_LIST_FORM
            },
            set(value) {
                this.$store.commit("SET_NEW_LIST_FORM", value)
            }
        },
         isOpen() {
             return this.$store.getters.NEW_LIST_FORM
         },
    },
    methods: {
        toogleSearchList() {
            this.$store.commit("SET_DISPLAY_SEARCH_LIST", !this.DISPLAY_SEARCH_LIST)
        },
        openNewListForm() {
            this.$store.commit("SET_NEW_LIST_FORM", true)
        }
    }
}
</script>