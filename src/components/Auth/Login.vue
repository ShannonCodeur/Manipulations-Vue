<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-form>
                    <v-card class="elevation-12">
                        <v-toolbar color="green ">
                            <v-toolbar-title>
                                    Login Form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-alert
                            color="error"
                            :value="error"
                            icon="close"
                        >
                            The Username or Password are incorrect
                        </v-alert>
                        <v-card-text>
                            <v-text-field
                                v-model="username"
                                prepend-icon="person"
                                name="Login"
                                label="Login"
                                type="text"
                            >
                            </v-text-field>
                             <v-text-field
                             v-model="password"
                             prepend-icon="lock"
                                name="Password"
                                label="Password"
                                type="password"
                            >
                            </v-text-field>
                        </v-card-text>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn rounded color="blue">Reset</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="blue" dark @click.prevent="login()"> Go</v-btn>
                             <v-spacer></v-spacer>
                            <v-btn to="/register" rounded color="blue">
                                SignUp
                               <v-icon>keyboard_arrow_right</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        username: '',
        password: '',
        error: false
    })
    ,
    methods: {
        login() {
            console.log(this.$store)
            this.$store.dispatch("LOGIN", {
                _username: this.username,
                _password: this.password
            })
            .then(success => {
                this.$router.push("/")
            })
            .catch(error => {
                error = true
                this.error = error
            })
            // this.$router.push("/") 
        }
    }
}
</script>  