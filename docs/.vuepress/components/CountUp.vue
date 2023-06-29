<template>
  <div>
    <ClientOnly>
      <slot name="before" />
      <span ref="countUp"></span>
      <slot name="after" />
      <span style="margin: 0px 0px 0px 100px">{{ stopwatch }}</span>
    </ClientOnly>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'CountUp',
  props: {
    startVal: {
      type: Number,
      default: 0,
    },
    endVal: {
      type: Number,
      required: true,
    },
    //小数位数
    decimalPlaces: {
      type: Number,
      default: 2,
    },
    duration: {
      type: Number,
      default: 10,
    },
    delay: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      counter: null,
      stopwatch: 0,
    };
  },
  methods: {
    init() {
      import('countup.js').then((module) => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endVal, {
            startVal: this.startVal,
            decimalPlaces: this.decimalPlaces,
            duration: this.duration,
          });
          setTimeout(() => {
            this.counter.start();
            if (this.counter.error) {
              console.error(this.counter.error);
            }
          }, this.delay);
        });
      });
    },
    stopwatch1(val) {
      const timer = this.stopwatch;
      console.log(val);
      let interval = setInterval(() => {
        this.stopwatch++;
        if (this.stopwatch >= val) {
          clearInterval(interval);
        }
      }, 1000);
      // while (true) {

      //   this.stopwatch = timer;
      //   if (this.stopwatch >= val) {
      //     break;
      //   }
      // }
    },
  },
  mounted() {
    this.init();
    this.stopwatch1(this.duration);
    // = moment.duration(this.duration, 'seconds');
  },
  beforeDestroy() {
    this.counter.reset();
    this.counter = null;
  },
};
</script>
