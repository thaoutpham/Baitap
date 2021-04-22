function kiemTra(number){
    let sum=0;
    if(number<=0){
        return false;
    }else {
        for(i=1;i<number;i++){
            if(number%i==0){
                sum+=number;
            }
            if(sum==number){
                return true;
            }
        }
    }return false;
}