module.exports = function check(str, bracketsConfig) {
  let stack=[];
  let flag=false;
  let seven= false;
  let eight= false;
  for (let i=0; i<str.length; i++){
    for (let j=0; j<bracketsConfig.length; j++){
      let index= bracketsConfig[j].indexOf(str[i]);
      if(index==-1) continue;

      if(bracketsConfig[j][index]==='7' && seven){
        index=1;
        seven = false;
      }else if(bracketsConfig[j][index]==='7') seven=true;
      if(bracketsConfig[j][index]==='8' && eight){
        index=1;
        eight = false;
      }else if(bracketsConfig[j][index]==='8') eight=true;
      if(bracketsConfig[j][index]==='|' && flag){
        index=1;
        flag = false;
      }else if(bracketsConfig[j][index]==='|') flag=true;
      if (index===0){
        stack.push(1+(j*10));
        break;
      }else if(index===1){
        console.log(stack);
        if(stack.pop() !== index + (j*10)) {
          return false;
          break;
        }
      }
    }
  }
  return stack.length==0;
}
