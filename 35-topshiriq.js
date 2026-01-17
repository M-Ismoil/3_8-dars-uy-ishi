try{
    let son1 = 1;
    let son2 = 0;

    class CustomError extends Error{
        constructor(message){
            super(message);
        }
    }

    if (son2==0){
        throw new CustomError("Sonni nolga bo'lib bo'lmaydi!");
    }
}catch (error){
    console.log(`Xatolik: ${error.message}`);
}