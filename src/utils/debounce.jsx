import React from 'react'

const _debounce = (cb,delay=300) => {
  let timer;
  return function(...args){
    if(timer) clearTimeout(timer);
    setTimeout(()=>{
        // console.log(args[0].target.value);
        cb(args)
    },delay)
  }
}

export default _debounce