<template>
  <q-page>
    <muuri-grid id="example-grid" ref="muuri" @gridCreated="gridCreated" @add="itemAdded">
      <div :class=" { item: true, itemSm: item.size == 1, itemMd: item.size == 2, itemLg: item.size == 3, itemXl: item.size == 4  }"
        v-for="(item, index) in blocks" :key="index">
        <div class="item-content">
          <div v-if="item.size>1">{{index+1}}
            <br> {{item.title}} </div>
          <div v-if="item.size==1">{{index+1}}</div>
        </div>
      </div>
    </muuri-grid>
    <q-btn round color="primary" @click="addWidget" class="fixed" icon="add" style="right: 50px; bottom: 50px" />
  </q-page>
</template>

<script>
  import {
    ItemLink,
    ItemSm,
    ItemMd,
    ItemLg
  } from "vue-muuri";

  export default {
    name: "PageIndex",
    data: function () {
      return {
        muuriGrid: undefined,
        count: 0
      };
    },
    computed: {
      blocks: function () {
        return this.$store.state.dash.blocks;
      }
    },
    mounted: function () {},
    methods: {
      // This is how we get the grid component from muuri-grid. By responding to gridCreated event
      gridCreated: function (grid) {
        console.log("GRID CREATED");
        this.muuriGrid = grid;
      },
      itemAdded: function (item) {
        console.log("ITEM " + JSON.stringify(item));
      },
      addWidget: function () {
        this.$router.replace({
          name: "newWidget"
        });

        // Using $router.go will destroy and revert state
        // this.$router.go({
        //   name: "newWidget"
        // });
      }
    },
    components: {
      ItemLink,
      ItemSm,
      ItemMd,
      ItemLg
    }
  };

</script>

<style>
  .border {
    border-style: solid;
  }

  .item {
    position: absolute;
    /* width: 200px;
  height: 200px; */
    line-height: 200px;
    margin: 5px;
    z-index: 1;
    text-decoration: none;
  }

  .item:hover {
    text-decoration: aqua;
  }

  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    background: red;
    font-size: 50px;
    color: white;
    cursor: pointer;
  }

  .itemSm {
    width: 200px;
    height: 200px;
  }

  .itemMd {
    width: 400px;
    height: 400px;
  }

  .itemLg {
    width: 600px;
    height: 600px;
  }

  .itemXl {
    width: 800px;
    height: 800px;
  }

</style>
