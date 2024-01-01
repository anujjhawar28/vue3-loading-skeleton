<template>
  <Component
    :is="tag"
    class="skeleton-box"
    :style="style"
    :class="{ preview }"
  />
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "SkeletonLoader",
  props: {
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: [Number, String],
      default: "32px",
    },
    size: {
      type: [Number, String],
    },
    circle: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    preview: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: "#dddbdd",
    },
    duration: {
      type: String,
      default: "1.5s",
    },
    gradient: {
      type: String,
      default:
        "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))",
    },
    animationTimingFunction: {
      type: String,
      default: "ease-in-out",
    },
    tag: {
      type: String,
      default: "span",
    },
  },
  setup(props) {
    const { width, height, size, pill, circle } = toRefs(props);
    const convertUnits = (
      str: string | number | null | undefined,
      unit = "px"
    ): string | undefined => {
      if (str == null || str === "") {
        return undefined;
      } else if (isNaN(str as number)) {
        return String(str);
      } else {
        return `${Number(str)}${unit}`;
      }
    };

    const style = computed(() => {
      let _style = {
        width: convertUnits(width.value),
        height: convertUnits(height.value),
      };
      if (circle.value || size.value) {
        _style = {
          width: convertUnits(size.value),
          height: convertUnits(size.value),
        };
      }
      return _style;
    });

    const borderRadius = computed(() => {
      if (pill.value && height.value && width.value) {
        return "9999px";
      } else if (circle.value && size.value) {
        return "50%";
      } else {
        return "";
      }
    });

    return {
      borderRadius,
      style,
    };
  },
});
</script>

<style scoped>
.skeleton-box {
  display: inherit;
  position: relative;
  overflow: hidden;
  background-color: v-bind(backgroundColor);
  border-radius: v-bind(borderRadius);
}
@keyframes Shimmer {
  100% {
    transform: translateX(100%);
  }
}
.skeleton-box:not(.preview):after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateX(-100%);
  background: v-bind(gradient);
  animation: Shimmer v-bind(duration) infinite v-bind(animationTimingFunction);
  content: "";
}
</style>
