import Vue from 'vue'

import Hello from './Hello.vue'

var chai = require('chai');
import chalk from 'chalk';

console.log(chalk.blue("In test")); // eslint-disable-line no-console

describe('Hello', () => {

  // Inspect the raw component options

  it('Has a data hook', () => {
    chai.expect(typeof Hello.data).to.equal("function")
  })

  it('Should have message that says: Welcome to Your Vue.js Application', done => {
    const vm = new Vue(Hello).$mount();
    chai.expect(vm.msg).to.equal('Welcome to Your Vue.js Application');
    done();
  })

})

