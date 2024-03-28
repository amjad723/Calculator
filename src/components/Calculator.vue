<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>Vue 3 + TypeScript</h1>
    <div >
      <h1>Calculator</h1>
       <!-- <input type="text" v-model="inputvalue" placeholder="00" > -->
       <h3>{{currentInput }} {{ result }}</h3>
        <!-- Displaying result if not null -->
      <div v-if="result !== null">Result: {{ result }}</div>
    
      <div class="keypad">
        <ul>
          <li @click="appendtoinput('1')" >1</li>
          <li @click="appendtoinput('2')" >2</li>
          <li @click="appendtoinput('3')" >3</li>
          <li @click="appendtoinput('+')">+</li>
        
          <!-- <button @click="clear">C</button> -->
        </ul>

        <ul>
            <li @click="appendtoinput('4')">4</li>
            <li @click="appendtoinput('5')">5</li>
            <li @click="appendtoinput('6')">6</li>
            <li @click="appendtoinput('-')">-</li>
    </ul>
    <ul>
              <li @click="appendtoinput('7')">7</li>
              <li @click="appendtoinput('8')">8</li>
              <li @click="appendtoinput('9')">9</li>
              <li @click="appendtoinput('*')">*</li>
            </ul>
            <ul>
              <li @click="clear">C</li>
              <li @click="appendtoinput('0')">0</li>
              <li @click="appendtoinput('/')">/</li>
              <li @click="calculate">=</li>
            </ul>

        </div>
      </div>
    </div>
</template>

<script lang="ts"  >
//import { Options, Vue } from 'vue-class-component';
import calculations from './allcalculations'
import { ref, defineComponent } from 'vue';
const { addnumbers  } = calculations();
import { Ref } from 'vue';

export default defineComponent({
  name : 'calculator',

setup() {

  const currentInput = ref('');
    const result = ref<number | null>(null);

    // const appendtoinput = (character) =>{
    //     inputvalue.value +=character;
    const appendtoinput = (number: string) => {
      currentInput.value += number;
        console.log(currentInput);

    };

    const calculate = () => {
      // Simple evaluation logic
      // Note: eval() is generally unsafe and is used here for simplicity.
      // Consider a safer alternative for complex expressions.
      try {
        result.value = eval(currentInput.value);
      } catch (error) {
        console.error('Invalid expression');
        result.value = null;
      }
    };

    const clear = () => {
      currentInput.value = '';
      result.value = null;
    };



// const calculate = () =>{
// const parts = inputvalue.value.split('+').map(Number);
// if (parts.length === 2) {
//   const numbers = parts.map(Number);
//   const {addnumbers} = calculations();
//   result.value = addnumbers(numbers[0],numbers[1]);
//   inputvalue.value = result.value.toString();
// console.log(inputvalue.value);
// }

// };

    return {
     // addTwoNumbers,
     appendtoinput,
      currentInput,
      result,
      calculate,
      clear,
      
    };
},
});

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
ul li {
    border: solid black 2px;
    border-radius: 10px;
    width: 50px;
    height: 30px;
    color:white;
    background-color: rgb(11, 87, 87);
    padding-top: 10px;
  }
  ul li:hover{
    background-color: orange;
  }
  input {
    background-color:yellowgreen;
    border-radius: 10px;
    width: 265px;
    height: 30px;
  }
</style>
