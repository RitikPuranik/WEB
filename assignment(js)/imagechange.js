// const a=document.querySelector('img')
const arr=["https://images.unsplash.com/photo-1737845079400-1d04c3f2ab5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    " https://images.unsplash.com/photo-1727206407683-490abfe0d682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D", 
  " https://images.unsplash.com/photo-1737698490807-9d8c6a700781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
  "    https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"]
  const a=document.querySelector('img')

  let num=0;

setInterval(function() {
    a.setAttribute('src',arr[num])

    num=(num+1)% arr.length;
}, 2000);