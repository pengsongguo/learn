<template>
  <div id="app">
    <HelloWorld msg="hello vue"/>
    <Counter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Counter from "./components/Counter";
import {store} from "./store";


export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  store
}
</script>

