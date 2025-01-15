//Practice file of Create type based on the combination of previous two types.

type CardNumber={
    cardNo:number,
}

type cardDate={
    cardDate:string,
}

//based on previous 2 types create a new another type

type cardDetails=CardNumber&cardDate&{
    cvv:number,
};

const details : cardDetails= {
   cardNo:123,
   cardDate:"25/7/2025",
   cvv:231
} 

console.log(details);


export {};