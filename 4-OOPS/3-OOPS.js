static get Builder(){
    class Builder{
        constructor(){
            this.name = '';
            this.price = 0;
            this.description = '';
        }
        setName(incomimgName){
            this.name=incomimgName;
            return this;
        }
        setPrice(incomimgPrice){
            this.price = incomimgPrice;
            return this;
        }
        setDescription(incomimgDescription){
            this.description = incomimgDescription;
            return this;
        }
        build(){
            return new Product(this);
        }
    }
    return Builder;
}