let items=[200,600,700,250,450];
let offer;
for(let i=0;i<items.length;i++){
  offer=items[i]/10;
  items[i]-=offer;
  console.log(items[i]);
}
