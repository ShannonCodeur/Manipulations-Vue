<template>
    <div style="height: 100%">
        <v-card style="height: 100%; overflow: hidden">
            <v-toolbar color="blue" dark>
                <v-toolbar-title>Title of the list {{ listId }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list two-line style="height: calc(100% - 128px); overflow-y: scroll">
                <template
                    v-for="(task, key) in tasks">
                    <Task v-bind:key="key" :task="task" :index="key"/>
                </template>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
                <v-layout>
                    <v-flex>
                        <NewTask />
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
        <router-view :key="$route.fullPath" name="notes"></router-view>
    </div>
</template>

<script>
import Task from './Task'
import NewTask from './NewTask'
// import NotesModal from './NotesModal'
export default {
    name: "tasks",
    components: { Task, NewTask/*, NotesModal*/},
    data: () => ({
        tasks: [
          {
              id: 1,
              title: "Task Title",
              subtitle: "Ceci est un Sous-Titre",
              isComplete: false,
          },  
           {
              id: 2,
              title: "Task Title",
              subtitle: "Ceci est un Sous titre",
              isComplete: false,
          },  
           {
              id: 3,
              title: "Task Title",
              subtitle:  "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,          },  
           {
              id: 4,
              title: "Task Title",
              subtitle: "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,
          },  
           {
              id: 5,
              title: "Task Title",
              subtitle: "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,
          },  
           {
              id: 6,
              title: "Task Title",
              subtitle: "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,
          },  
        {
              id: 7,
              title: "Task Title",
              subtitle: "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,
          },  
           {
              id: 8,
              title: "Task Title",
              subtitle: "This is a Subtitle Of this Way, Just tried it",
              isComplete: true,
          },  
        ]
    }),
    computed: {
        listId () {
            return this.$route.params.id;
        }
    }
}
</script>