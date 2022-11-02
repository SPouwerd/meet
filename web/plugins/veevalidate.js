import Vue from 'vue';
import { ValidationProvider, extend } from 'vee-validate';

// Add a rules.
extend('test', {
validate: value => value === 'test',
message: 'This is not the magic word'
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value)
    };
  },
  message: 'Required enabled by default',
  computesRequired: true
});

extend('email', {
  validate(value) {
    return {
      required: true,
      valid: String(value)
      .toLowerCase()
      //  eslint-disable-next-line max-len
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    };
  },
  message: 'Use a valid email',
  computesRequired: true
});

extend('password', {
  validate: value => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(value);},
    message: 'Need uppercase-letter, lowercase-letter, number and special-character',
    computesRequired: true
  });

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);