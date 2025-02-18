<template>
  <input
    :id="data.id"
    :type="data.type"
    :placeholder="data.placeholder"
    v-model="localValue"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface FieldData {
  id: string
  type: string
  placeholder: string
}

const props = defineProps<{ data: FieldData, modelValue?: string }>()
const emit = defineEmits(['update:modelValue'])
const localValue = ref(props.modelValue || '')

watch(localValue, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>
