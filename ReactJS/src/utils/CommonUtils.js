class CommonUtils {
    // static isNumber1 (number) {
    //     if (number === 1) return true;
    //     return false;
    // }
    static getBase64(file){
        return new Promise((resovel, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resovel(reader.result);
            reader.onerror = e => reject(e);
        })
    }
}

export default CommonUtils;