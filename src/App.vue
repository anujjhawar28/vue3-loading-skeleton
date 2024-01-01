<template>
  <div>
    <!-- Example 1: Dynamic Width Loader -->
    <h3>Default Skeleton Loader</h3>
    <SkeletonLoader />

    <h3>Default Skeleton Loader with size property only</h3>
    <SkeletonLoader size="100" />

    <!-- Example 2: Circle/Avatar Loader with Different Sizes -->
    <h3>Skeleton Loader with Circle and size property and custom Tags</h3>
    <div style="display: flex; align-items: center">
      <SkeletonLoader pill width="10%" tag="h3" />
      <SkeletonLoader circle :size="50" tag="div" />
      <SkeletonLoader circle :size="70" />
    </div>

    <!-- Example 2.1: Circle/Avatar Loader with Different Sizes -->
    <h3>Preview mode of the Components</h3>
    <SkeletonLoader preview />
    <SkeletonLoader pill preview width="10%" tag="h3" />
    <SkeletonLoader circle preview :size="50" />

    <!-- Example 3: Color Background of Loader Change -->
    <h3>Change Background Color of Component</h3>
    <SkeletonLoader :backgroundColor="'#343541'" />
    <SkeletonLoader :backgroundColor="'#a0a0a0'" />
    <SkeletonLoader :backgroundColor="'red'" />

    <!-- Example 4: Table Listing Loader -->
    <h3>Table Representation</h3>
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

    <h3>Table Representation Preview</h3>
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
import { SkeletonLoader } from "./components";
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
