<template>
    <v-list-item @click.prevent="toogle(index)">
        <v-list-item-action>
                <v-btn icon @click="openModal()">  
                    <v-icon color="pink">edit</v-icon>
                </v-btn>
        </v-list-item-action>

        <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ task.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action-text>
            <v-icon color="green" v-if="task.isComplete">check_circle</v-icon>
            <v-icon color="grey" v-else>check_circle</v-icon>
        </v-list-item-action-text>
    </v-list-item>
</template>

<script>
export default {
    name: 'task',
    props: {
        task: Object,
        index: Number
    },
    methods: {
        toogle(index){
            console.log(index)
            // TODO push the changes to the store
        },
        openModal(){
            this.$router.push({
                name: 'notes',
                params: {taskId:this.task.id} 
            })
        }
    }
}
</script>
