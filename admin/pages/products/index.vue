<template>
 <div class="products">
   <h2 class="subheading grey--text">Products</h2>
   
     <v-btn depressed  class="success" to="/products/AddProduct"><v-icon>add</v-icon><span> Add Products</span></v-btn>
       <v-btn depressed  class="orange white--text" to="/products/AddCategory"><v-icon></v-icon><span> Add Category</span></v-btn>
         <v-btn depressed  class="green white--text" to="/products/AddOwner"><v-icon></v-icon><span> Add Vendor</span></v-btn>
 <v-container class="my-5">


       <v-card class="pa-2" flat v-for="(product, index) in products" 
             :key="product._id">
         <v-layout row wrap class="pa-5">
           <v-flex xs4 md2>
            <div class="grey--text"><img :src="product.photo" height='50px'/></div>
            </v-flex>
            <v-flex xs4 md2>
              <div><span>{{ product.title }}</span></div>
              </v-flex>
              <v-flex xs4 md2>
              <div><span>${{ product.price }}</span></div>
              </v-flex>
              <v-flex xs4 md3>
               <v-btn depressed class="orange darken-4 white--text" :to="`/products/${product._id}`">
                <v-icon>update</v-icon>
                  <span> Update </span>
              </v-btn>
              </v-flex>
              <v-flex xs4 md3>
               <v-btn depressed class="red darken-4 white--text" @click="onDeleteProduct(product._id, index)">
                <v-icon>delete</v-icon>
                  <span> Delete </span>
              </v-btn>
           </v-flex>
         </v-layout>
           <v-divider></v-divider>
       </v-card>
     
     </v-container>

  </div>
</template>

<script>

  export default {
    async asyncData({ $axios })  {
      try {
        let response = await $axios.$get("http://localhost:3000/api/products");
        console.log(response);
        return {
          products: response.products
        };
      } catch (err) {}
    }, 
    methods: {
      async onDeleteProduct(id, index) {
        try {
          let response = await this.$axios.$delete(`http://localhost:3000/api/products/${id}`
          );

          if (response.status) {
            this.products.splice(index, 1);
          }

        } catch (err) {
          console.log(err)
        }
      }
    }
     
  };
</script>

<style lang="css" scoped>

</style>
