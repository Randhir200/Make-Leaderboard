function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
   
    var arr = [];
    var line=1;
    for(var i=1;i<=n;i++){
       arr.push(input[i].trim().split(" ")); 
    }
     
      for(var i=0;i<n;i++){
        var min = i;
        for(var j=i+1;j<n;j++){
            if(arr[min][1]<arr[j][1]){
                min = j
            }
        }
        swap(arr,min,i)
    }
   
    for(var i=0;i<n;i++){
        var min = i;
        for(var j=i+1;j<n;j++){
            if(arr[min][1]==arr[j][1]&&arr[min][0]>arr[j][0]){
                min = j
            }
        }
        swap(arr,min,i)
    }
    
    var rrnk = 1;
    var crnk = 1;
    
    console.log(crnk, arr[0][0]);
    
    for(var i=1;i<arr.length;i++){
    crnk++;
        if(arr[i][1]==arr[i-1][1]){
            console.log(rrnk, arr[i][0])
        }else{
            rrnk = crnk;
            console.log(rrnk, arr[i][0])
            
        }
    }
   
   //  console.log(arr);
    }
   
   function swap(arr1,a,b){
   
       var temp1 = arr1[a];
       arr1[a] = arr1[b];
       arr1[b] = temp1;
       
   }
   
   
   
   
   if (process.env.USER === "") {
     runProgram(``);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }