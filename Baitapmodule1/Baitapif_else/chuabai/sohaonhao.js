function kiemTra(number){
    let sum=0;
    if(number<=0){
        return false;
    }else {
        for(i=0;i<number;i++){
            if(number%2==0){
                sum+=number;
            }
            if(sum==number){
                return true;
            }
        }
    }return false;
}