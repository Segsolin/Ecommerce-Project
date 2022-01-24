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
      <v-icon class="px-9" size="35">person</v-icon>

      <v-toolbar-title class="headline">User Profile</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card width="300">
            
              <v-card-title>
                <v-avatar
                color="indigo"
                size="150"
                class="mx-auto white--text"
                ><v-icon dark size="75">photo_camera</v-icon></v-avatar>
              <template></template>
              <v-card-text class="headline text-md-center text-h4">{{ $auth.$state.user.username }}</v-card-text>
              <v-card-text class="text-md-center text-h6">Shop/Brand name</v-card-text>
              </v-card-title>
              <v-divider></v-divider>
               <v-card-text class="text-md-center text-h5">Shop Address </v-card-text>
              <v-card-text class="text-h6 text-md-center"><div class="mapouter"  style="height: 320px"><div class="gmap_canvas" style="height: 300px"><iframe width="300px" height="280px" id="gmap_canvas" src="https://maps.google.com/maps?q=6%20Davies%20Street%20Ketu&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:280px;}</style></div></div></v-card-text>
            

           
          </v-card>
        </v-col>
          <v-col>
          <v-card width="820">
            
              <v-card-title class="text-h4">User Info</v-card-title>
              <v-divider></v-divider>
              <v-layout col wrap class="pa-5">
                <v-flex xs4 md4 lg4>
              <div><v-card-text  class="text-h6">Full Name: </v-card-text></span></div>
              </v-flex>
              <v-flex xs8 md8 lg8>
              <div><v-card-text class="text-h6">{{ $auth.$state.user.name }}</v-card-text></span></div>
              </v-flex>
           </v-layout>  
              <v-divider></v-divider>
             <v-layout col wrap class="pa-5">
                <v-flex xs4 md4 lg4>
              <div><v-card-text  class="text-h6">Email: </v-card-text></span></div>
              </v-flex>
              <v-flex xs8 md8 lg8>
              <div><v-card-text class="text-h6">{{ $auth.$state.user.email }}</v-card-text></span></div>
              </v-flex>
           </v-layout>
           <v-divider></v-divider>
             <v-layout col wrap class="pa-5">
                <v-flex xs4 md4 lg4>
              <div><v-card-text  class="text-h6">Phone Number: </v-card-text></span></div>
              </v-flex>
              <v-flex xs8 md8 lg8>
              <div><v-card-text class="text-h6">07030667504</v-card-text></span></div>
              </v-flex>
           </v-layout>                    
          <v-divider></v-divider>
            <v-layout col wrap class="pa-5">
                <v-flex xs4 md4 lg4>
              <div><v-card-text  class="text-h6">Gender: </v-card-text></span></div>
              </v-flex>
              <v-flex xs8 md8 lg8>
              <div><v-card-text class="text-h6">Male</v-card-text></span></div>
              </v-flex>
           </v-layout>      
           
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