import {
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps,
  Plugin,
  App,
} from "vue";

export interface SkeletorOptions {
  shimmer?: boolean;
}

export interface SkeletonLoaderProps {
  tag?: string;
  circle?: boolean;
  pill?: boolean;
  preview?: boolean;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  duration?: string;
  gradient?: string;
  animationTimingFunction?: string;
}

export const SkeletonLoader: new () => {
  $props: AllowedComponentProps &
    ComponentCustomProps &
    VNodeProps &
    SkeletonLoaderProps;
};
