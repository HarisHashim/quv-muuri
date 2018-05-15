<template>
  <q-page padding>
    <q-card style="width: 500px">
      <q-card-title>
        Create New Widget
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-field>
          <q-input v-model="text" float-label="Widget Text" placeholder="text" />

          <div class="q-mt-lg">
            Size ({{size}})
          </div>
          <q-slider v-model="size" :min="1" :max="4" />
          <q-btn class="q-mt-sm" @click="addNewWidget">OK</q-btn>
        </q-field>
      </q-card-main>
    </q-card>

  </q-page>
</template>

<script>
  export default {
    // name: 'PageName',
    data: function () {
      return {
        text: "Hello World!",
        size: 2
      }
    },
    computed: {
      blocks: {
        get() {
          return this.$store.state.dash.blocks;
        },
        set(item) {
          this.$store.commit("dash/addBlocksItem", item);
        }
      }
    },
    methods: {
      addNewWidget: function () {
        const newItem = {
          title: this.text,
          size: this.size
        };

        this.blocks = newItem;
        console.log("BLOCKS :" + JSON.stringify(this.$store.state.dash.blocks));

        this.$router.replace({
          name: "dash"
        });
      }
    }
  }

</script>

<style>


</style>
