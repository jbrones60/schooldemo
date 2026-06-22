<script setup lang="ts">
interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'password'
  required?: boolean
  placeholder?: string
  options?: string[]
  hint?: string
  disabled?: boolean
}

const props = defineProps<{
  field: FormField
  error?: string
}>()

const model = defineModel<string>({ default: '' })

const inputId = computed(() => `field-${props.field.name}`)
const hasError = computed(() => !!props.error)
</script>

<template>
  <div class="form-group">

    <!-- Label -->
    <label :for="inputId" class="form-label">
      {{ field.label }}
      <span v-if="field.required" class="required" aria-hidden="true">*</span>
    </label>

    <!-- Textarea -->
    <textarea
      v-if="field.type === 'textarea'"
      :id="inputId"
      v-model="model"
      class="form-control"
      :class="{ 'is-error': hasError }"
      :name="field.name"
      :placeholder="field.placeholder"
      :required="field.required"
      :disabled="field.disabled"
      :aria-describedby="field.hint ? `${inputId}-hint` : undefined"
      :aria-invalid="hasError || undefined"
    />

    <!-- Select -->
    <select
      v-else-if="field.type === 'select'"
      :id="inputId"
      v-model="model"
      class="form-control"
      :class="{ 'is-error': hasError }"
      :name="field.name"
      :required="field.required"
      :disabled="field.disabled"
      :aria-describedby="field.hint ? `${inputId}-hint` : undefined"
      :aria-invalid="hasError || undefined"
    >
      <option value="" disabled>
        {{ field.placeholder || `Select ${field.label}` }}
      </option>
      <option
        v-for="option in field.options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <!-- All other input types -->
    <input
      v-else
      :id="inputId"
      v-model="model"
      class="form-control"
      :class="{ 'is-error': hasError }"
      :type="field.type"
      :name="field.name"
      :placeholder="field.placeholder"
      :required="field.required"
      :disabled="field.disabled"
      :aria-describedby="field.hint ? `${inputId}-hint` : undefined"
      :aria-invalid="hasError || undefined"
    />

    <!-- Hint text -->
    <span
      v-if="field.hint"
      :id="`${inputId}-hint`"
      class="form-hint"
    >
      {{ field.hint }}
    </span>

    <!-- Error message -->
    <span
      v-if="hasError"
      role="alert"
      class="form-error-text"
    >
      {{ error }}
    </span>

  </div>
</template>
