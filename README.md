# 💀 Vue3 Skeleton Loading (Vue 3+ Typescript + Vite)

Vue 3 adaptive skeleton loading component that will match your typography.

<!-- [Codesandbox Card Example](https://codesandbox.io/s/epic-ishizaka-nl9z3?file=/src/App.vue) -->

## Installation

`npm install vue3-loading-skeleton`

## Why adaptive Vue3 Skeleton Loading ?

Skeletons are used to mimic how the real content would look, so in order to create nice skeleton you would have to manually create squares, circles and position/size them to match your real component and keep it updated whenever you change it.

Aww sounds awful isn't it?

Wouldn't be nice if you had a component for skeleton that automatically adjusts to your existing components layout? I think it would =) so the Vue3 Skeleton Loading comes to rescue.

Instead of creating separate skeleton components you can inject skeletons directly into your existing components.

Example:

```html
  <template>
    <div class="post">
      <div class="post__image">
        <img
          v-if="post"
          :src="post.img"
          height="200"
        />

        <!-- A simple 200px height rect which mimics the post image  -->
        <SkeletonLoader v-else-if="isPostLoading" height="200"/>
      </div>

      <div class="post__title">
        <template v-if="post">
          {{ post.title }}
        </template>

        <SkeletonLoader v-else-if="isPostLoading">
      </div>

      <div class="post__text">
        <template v-if="post">
          {{ post.text }}
        </template>

        <template v-else-if="isPostLoading">
          <!-- Creating 5 skeletons that mimics the text -->
          <SkeletonLoader v-for="i in 5">
        </template>
      </div>
    </div>
  </template>
```

And that's it, the text skeletons will automatically catch up with the styles you defined for the title and text elements.

## Basic Usage

First import the SkeletonLoader styles

```js
import "vue3-loading-skeleton/dist/style.css";
```

Option 1 - Register Locally

```js
// SomeComponent.vue
import { SkeletonLoader } from "vue3-loading-skeleton";

export default {
  components: { SkeletonLoader },
};
```

Option 2 - Register Globally

```js
// main.ts
import { SkeletonLoader } from "vue3-loading-skeleton";

createApp(App).component("SkeletonLoader", SkeletonLoader).mount("#app");
```

```html
<!-- And use in your <template> or JSX -->
<SkeletonLoader />
```

### Props Support

## Width

`width`: number | string
`default`: `100%`

```html
<!-- Both are same and evaluate to 100px -->
<SkeletonLoader width="100" />
<SkeletonLoader :width="100" />

<!-- Any valid css value for width property -->
<SkeletonLoader width="50%" />
```

Width of your skeleton, can be a number or css string value.

## Height

`height`: number | string
`default`: `32px`

```html
<!-- Both are same and evaluate to 100px -->
<SkeletonLoader height="100" />
<SkeletonLoader :height="100" />

<!-- Any valid css value for width property -->
<SkeletonLoader height="50%" />
```

Height of your skeleton, can be a number or css string value.

### ⚠️ Notice

When you set height, your skeleton automatically becomes a rect with `display: 
block` meaning it will no longer adapt to your typography, which is useful for
creating non text block level skeletons like image placeholders, buttons, and e.t.c.

## Size

`size`: number | string
⚠️ It works with `circle` property also

```html
<!-- Creates a 100x100 circle -->
<SkeletonLoader size="100" circle />

<!-- Creates a 100x100 square -->
<SkeletonLoader size="100" />
```

Size sets both `width` & `height` to simplify creating square/circle shapes

## Circle

`circle`: boolean (default: false)

```html
<!-- Creates a 50x50 circle -->
<SkeletonLoader circle size="50" />
```

As the name suggest it just turns the element into a circle, use only when `width` & `height` or size is set.

## Pill

`pill`: boolean
`default`: `false`

```html
<SkeletonLoader width="200" height="50" pill />
```

Makes rectangular skeletons fully rounded, useful when creating rounded button or chip or card's footer or actions buttons
and e.t.c shapes.

## Preview

`preview`: boolean
`default`: `false`

```html
<SkeletonLoader preview />
```

Optionally you can turn off/on specific skeleton's preview animation, it is based, if you enable preview, then the component will have preview mode without animation.

## Tag

`tag`: string
`default`: `span`

```html
<SkeletonLoader :size="100" tag="div" />
```

By default skeletons are rendered as `span` tags, but you can change it
using this prop.

## Customizing the style and animation with Props

SkeletonLoader supports additional props which is exposed to change the animation dynamically as per need and use cases.

## Background color

`backgroundColor`: string
`default`: `#dddbdd`

```html
<SkeletonLoader :backgroundColor="#a0a0a0" />
```

You can change the background color of your skeleton using this property.

## Duration

`duration`: string
`default`: `1.5s` [ref](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration)

```html
<SkeletonLoader :duration="2s" />
```

By default skeletons are rendered with animation duration `1.5s` you can customize with valid animation duration [css value in seconds](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration).

## Gradient

`gradient`: string
`default`: `linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))`

```html
<SkeletonLoader :duration="2s" />
```

You can change the animation background gradient of your skeleton using this property with valid css animation gradient.[Reference for Background gradient generator](https://animated-gradient-background-generator.netlify.app/)

## Animation Timing Function

`animationTimingFunction`: string
`default`: `ease-in-out` [ref](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

```html
<SkeletonLoader :animationTimingFunction="ease-out" />
```

You can change the animation Timing Function of your skeleton using this property with valid css [animation timing function value](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
