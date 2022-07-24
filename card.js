$("#map").click(()=> {
  const pathname = window.location.pathname;
  
  if (pathname?.includes('sangeet')){
    window.open('https://goo.gl/maps/wEUrQXE4DAEetR9r8')
  } else if (pathname?.includes('baraat')){
    window.open('https://goo.gl/maps/8kfpy8qvkeqqsA236')
  }if (pathname?.includes('lagan')){
    window.open('https://goo.gl/maps/JiJJ5r81haDw9TQY8')
  } else {
    window.open('https://goo.gl/maps/izMYyWzgQT9U4vNeA')
  }
})

$("#home_loc").click(()=> {
    window.open('https://goo.gl/maps/izMYyWzgQT9U4vNeA')
})