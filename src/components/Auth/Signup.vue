<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>  
            <v-flex xs15 sm9 md8>
                <v-card class="elevation-12">
                    <v-toolbar dark color="green">
                        <v-toolbar-title>
                            Sign Up Form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-form>
                        <v-alert
                            :value="true"
                            color="error"
                            icon="warning"
                        >

                        This user already exists, try a different set of data
                        </v-alert>
                        <v-text-field
                            prepend-icon="person"
                            name="login"
                            label="Login"
                            v-model="login"
                            :rules="[rules.required]"
                        >
                        </v-text-field>
                        <v-text-field
                            prepend-icon="email"
                            name="email"
                            label="email"
                            v-model="email"
                            :rules="[rules.required, rules.email]"
                        >
                        </v-text-field>
                        <v-text-field
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            :rules="[rules.required]"
                            type="password"
                            v-model="password"
                        >
                        </v-text-field>
                        <v-text-field
                            prepend-icon="lock"
                            name="password"
                            label="Confirm Password"
                            :rules="[rules.required]"
                            type="password"
                            v-model="confirm_password"
                            :error="!valid()"
                        >
                        </v-text-field>
                        <v-divider light></v-divider>
                        <v-card-actions>
                            <v-btn @click="reset" rounded color="blue">Reset</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="success" @click.prevent="regster()">Go</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="blue" to="/login">Login</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "Signup",
    data: () => ({
        login: '',
        email: '',
        password: '',
        confirm_password: '',
        rules:{
            required: value => !!value || "Required",
            email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "Invalid e-mail"
            }
        }
    }),
    methods: {
        register(){
            this.$router.push('/login')
        },
        valid() {
            return this.password === this.confirm_password
        },
        clear()
        {
            this.login = '',
            this.email = '',
            this.password = '',
            this.confirm_password = ''
        }
    }
}
</script>