<template>
         <v-card>
         <v-card-title class="blue darken-4 white--text">
            <v-col cols="4"></v-col>
             <h2>Update {{ product.title }}</h2>
             <v-col cols="4"></v-col>
         </v-card-title>
        <v-divider></v-divider>
         <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Name of Product*"
                  required
                  v-model="title"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Price*"
                  hint="product price"
                  persistent-hint
                  required
                  v-model="price"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Stock Quantity*"
                  hint="Quantity of the Product available"
                  persistent-hint
                  required
                  v-model="stockQuantity"
                  outlined
                ></v-text-field>
              </v-col>
               
              <v-col cols="12">
                <v-textarea
                name="input-7-1"
                filled
                label="Description"
                auto-grow
                value="Product Description"
                v-model="description"
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6">

                    <label for="standard-select">Standard category</label>
            <div class="select">
              <select>
                <option v-for="category in categories"
                            :value="category._id"
                            :key="category._id">{{ category.type }}</option>
               </select>
              <span class="focus"></span>
            </div>
              </v-col>

    
              <v-col
                cols="12"
                sm="6"
              >
                <label for="standard-select">Standard vendor</label>
            <div class="select">
              <select>
                <option v-for="owner in owners"
                            :value="owner._id"
                            :key="owner._id">{{ owner.name }}</option>
               </select>
              <span class="focus"></span>
            </div>
              </v-col>
            </v-row>
          </v-container>
            <template>
                <v-col cols="12">
               <!-- <v-file-input
                    label="Upload Product Photo"
                    show-size
                    filled
                    prepend-icon="backup"
                    max-width="200px"
                    @change="onFileSelected($event)"
                    ></v-file-input> -->
                    <input type="file" @change="onFileSelected($event)" />
                   
            </v-col>
            </template>
         <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="blue darken-4 white--text"
            
            @click="onUpdateProduct"
          >
            Update
          </v-btn>
        </v-card-actions>
      
</v-card>

    
</template>

<script>


    export default {
        async asyncData({ $axios, params }) {
            try {
                let categories = $axios.$get("http://localhost:3000/api/categories");
                let owners = $axios.$get("http://localhost:3000/api/owners");
                let product = $axios.$get(`http://localhost:3000/api/products/${params.id}`);

                const [catResponse, ownerResponse, productResponse] = await Promise.all([
                    categories,
                    owners,
                    product
                ]);

                console.log(productResponse);

                return {
                    categories: catResponse.categories,
                    owners: ownerResponse.owners,
                    product: productResponse.product
                };

            } catch (err) {
                console.log(err)
            }
        },
      
      data() {
        return {
          categoryID: null,
          ownerID: null,
          title: "",
          price: "",
          description: "",
          selectedFile: null,
          stockQuantity: "",
          fileName: ""
        };
      },
      methods: {
        onFileSelected(event) {
          this.selectedFile = event.target.files[0];
          console.log(this.selectedFile);
          this.fileName = event.target.files[0].name;
        },
        async onUpdateProduct() {
          let data = new FormData();
          data.append("title", this.title);
          data.append("price", this.price);
          data.append("description", this.description);
          data.append("ownerID", this.ownerID);
          data.append("categoryID", this.categoryID);
          data.append("stockQuantity", this.stockQuantity);
          data.append("photo", this.selectedFile, this.selectedFile.name);

          let result = await this.$axios.$put(
            `http://localhost:3000/api/products/${this.$route.params.id}`, 
            data
          );

          this.$router.push("/products")
        }
      }
    };
</script>

<style scoped>

</style>