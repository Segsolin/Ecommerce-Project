<template>
   <div>
    <v-card class="blue lighten-3">
        <v-card-title class="blue darken-4 white--text">
            <v-col cols="4"></v-col>
             <h2>Add a new Caegory</h2>
            <v-col cols="4"></v-col>
             </v-card-title>
        <v-divider></v-divider>
                  <v-text-field
                  label="Name of Category*"
                  required
                  v-model="type"
                ></v-text-field>
             </v-col>
         </v-card-title>
        <v-divider></v-divider>
        <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                  
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="blue darken-4 white--text"
            
            @click="onAddCategory"
          >
            Add Category
          </v-btn>
        </v-card-actions>
    </v-card>

<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="category in categories"
          :key="category._id"
        >
         
          <v-list-item-content>
            <v-list-item-title ><h2>{{ category.type }}</h2></v-list-item-title>
            <v-divider></v-divider>
          </v-list-item-content>
          
          </v-list-item>
          
      </v-list-item-group>
    </v-list>
  </v-card>
  </template>
</div> 
</template>

<script>
    export default {
      async asyncData({ $axios }){
        try {
          let response = await $axios.$get("http://localhost:3000/api/categories");
          return {
            categories: response.categories
          };
        } catch  (err) {
          console.log(err);
        }
      },

      data() {
        return {
          type: ""
        };
      },

      methods: {
        async onAddCategory() {
          try {
            let data = { type: this.type };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/categories",
            data
            );
          
          
            this.categories.push(data);
          
          } catch (err) {
            console.log(err)
          }
          
        }
      }
        
    };
</script>

<style lang="scss" scoped>

</style>