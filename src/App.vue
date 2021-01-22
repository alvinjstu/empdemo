<template>
  <div class="main">
    {{this.MyName}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  name: string = "Simon Zhang";

  // computed
  get MyName(): string {
    return `My name is ${this.name}`;
  }

  // methods
  sayHello(): void {
    // alert(`Hello ${this.name}`);
    this.name="234242424"
  }

  mounted() {
    this.sayHello();
  }
}
</script>

<style scoped>
.main {
  text-align: center;
}

img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
