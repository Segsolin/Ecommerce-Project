<template>
   <v-content>
<v-card width="800" class="mt-9">
<v-card-title> Login </v-card-title>
<v-card-text>
    <v-text-field label="Email" prepend-icon="person" v-model="email"></v-text-field>
   <v-text-field 
    label="Password" 
    :type="showPassword ? 'text' : 'password'"
    prepend-icon="lock"
    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
    @click:append="showPassword = !showPassword"
    v-model="password"/>
        
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
    <v-btn color="success" @click="onLogin">Login</v-btn>
    <v-btn color="info">Register</v-btn>
</v-card-actions>
</v-card>
</v-content>
</template>

<script>
    export default {
        middleware: "auth",
        auth: "guest",
        data() {
            return {
                showPassword: false,
                email: "",
                password: "",
            };
        },
        methods: {
            async onLogin() {
                try {
                                       
                        this.$auth.loginWith("local", {
                            data: {
                            email: this.email,
                            password: this.password
                            }
                        });
                        this.$router.push("/");
                  
                } catch (err){
                    console.log(err);
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>}