import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

// Add a rules.
extend('test', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

extend('required', {
    validate(value) {
      return {
        required: true,
        valid: !['', null, undefined].includes(value)
      };
    },
    computesRequired: true
  });

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);