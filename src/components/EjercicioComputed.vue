<template>
    <div>
    <label v-custom-fond.red.xxl>subtotal</label>
     <input type="number" v-model="subtotal"/>
     <h3 v-custom-font.xxl.blue>Total impuesto a pagar: {{ totalVat }} ({{  vat }}%)</h3>
     
    </div>
 </template>
 
 <script lang="ts" setup>
 import { ref, Ref, computed } from 'vue';

 const vat = 18
 let subtotal:Ref<number> = ref(0)
    const totalVat = computed(() => (vat*subtotal.value) / 100)

         //let price:Ref<number> = ref(0)
         //const igv = computed(() => price.value*0.18)
         //const subtotal = computed(() => price.value-igv.value)
         
 </script>
 
 <style scoped>
 </style>