 <template>
 <div>
     <v-card
    class="mx-auto"
    max-width="1200"
  >
    <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>

    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-icon class="px-9" size="35">dashboard</v-icon>

      <v-toolbar-title class="headline">Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card width="300">
            
              <v-card-title>name</v-card-title>
            

           
          </v-card>
        </v-col>
          <v-col>
          <v-card width="820">
            
              <v-card-title>name</v-card-title>
            

           
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>