<template>
  <div>
    <!-- Example 1: Dynamic Width Loader -->
    <SkeletonLoader />

    <!-- Example 2: Circle/Avatar Loader with Different Sizes -->
    <div style="display: flex; align-items: center">
      <SkeletonLoader pill width="10%" tag="h2" />
      <SkeletonLoader circle :size="50" tag="div" />
      <SkeletonLoader circle :size="70" />
    </div>

    <!-- Example 2.1: Circle/Avatar Loader with Different Sizes -->
    <SkeletonLoader preview />
    <SkeletonLoader pill preview width="10%" tag="h2" />
    <SkeletonLoader circle preview :size="50" />
    <SkeletonLoader circle preview :size="70" />

    <!-- Example 3: Color Background of Loader Change -->
    <SkeletonLoader :backgroundColor="'#f0f0f0'" />
    <SkeletonLoader :backgroundColor="'#a0a0a0'" />

    <!-- Example 4: Table Listing Loader -->
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td>
            <SkeletonLoader :width="100" />
          </td>
          <td>
            <SkeletonLoader :width="150" />
          </td>
          <td>
            <SkeletonLoader :width="80" />
          </td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td>
            <SkeletonLoader preview :width="100" />
          </td>
          <td>
            <SkeletonLoader preview :width="150" />
          </td>
          <td>
            <SkeletonLoader preview :width="80" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import SkeletonLoader from "./components/SkeletonLoader.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    SkeletonLoader,
  },
  setup() {
    const tableData = ref(
      Array.from({ length: 5 }, (_, index) => ({ id: index }))
    );

    return {
      tableData,
    };
  },
});
</script>
