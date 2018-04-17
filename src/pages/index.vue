<template>
  <q-page>
    <muuri-grid id="example-grid">
      <div :class=" { item: true, itemSm: item.size == 1, itemMd: item.size == 2, itemLg: item.size == 3, itemXl: item.size == 4  }" v-for="(item, index) in blocks" :key="index">
        <div class="item-content">
          <div>{{index+1}} <br> {{item.title}}</div>
        </div>
      </div>
    </muuri-grid>
  </q-page>
</template>

<script>
import { ItemLink, ItemSm, ItemMd, ItemLg } from "vue-muuri";

export default {
  name: "PageIndex",
  data: function() {
    return {
      blocks: [
        {
          title: "Hello world!",
          size: 1
        },
        {
          title: "Hello world!",
          size: 1
        },
        {
          title: "Hello world!",
          size: 2
        },
        {
          title: "Hello world!",
          size: 2
        },
        {
          title: "Hello world!",
          size: 2
        },
        {
          title: "Hello world!",
          size: 3
        }
      ]
    };
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
