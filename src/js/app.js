import '@/css/tailwind.css';

import '@/js/vars'; // global vars 
import '@/js/service-worker'; // enable service-worker

console.log('Check import functions:', $("body"));

const testAsync =  async () => {
   await console.log('Check async funtions: Ok')
}

testAsync()

try {
   console.log('Check babel job:', testAsync);
} catch (error) {
      console.log('Error', error);
}
